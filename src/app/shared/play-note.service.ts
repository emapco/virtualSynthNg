import {Injectable} from '@angular/core';
import {OscillatorService} from "./oscillator.service";

@Injectable({
  providedIn: 'root'
})
export class PlayNoteService {
  private _audioContext;
  private _noteFrequencies = {  // frequencies starting with middle C
    'A': 261.626,
    'W': 277.183,
    'S': 293.665,
    'E': 311.127,
    'D': 329.628,
    'F': 349.228,
    'T': 369.994,
    'G': 391.995,
    'Y': 415.305,
    'H': 440.000,
    'U': 466.164,
    'J': 493.883,
    'K': 523.252,
    'O': 554.365,
    'L': 587.330,
    'P': 622.254,
    ';': 659.255
  }

  constructor(private oscServ: OscillatorService) {
    // @ts-ignore
    this._audioContext = new (window.AudioContext || window.webkitAudioContext)();
  }

  playNotes(noteKey: string) {
    this.oscServ.oscillators.forEach((osc) => {
      if (osc.on) {
        let audioVolume = this._audioContext.createGain();
        let audioFilter = this._audioContext.createBiquadFilter();
        let audioOsc = this._audioContext.createOscillator();
        // @ts-ignore
        let keyFrequency = this.calculateFreq(this._noteFrequencies[noteKey], osc.octave)
        // connect filter nodes if enabled
        if (osc.filter.enabled) {
          audioOsc.connect(audioFilter);
          audioFilter.connect(audioVolume);
          audioFilter.type = Object(osc.filter.type);
          audioFilter.frequency.value = osc.filter.frequency;
        } else {
          audioOsc.connect(audioVolume); // can't connect osc to gain if using filter or it bypasses filter.
        }

        // connect remainder of nodes
        audioVolume.connect(this._audioContext.destination);
        audioOsc.type = Object(osc.wave);
        audioOsc.frequency.value = keyFrequency;
        if (osc.detuneEnabled) {
          audioOsc.detune.setTargetAtTime(osc.detune, 0, .01);
        }
        audioVolume.gain.value = osc.gain / 100;
        audioVolume.gain.setTargetAtTime(0, this._audioContext.currentTime, .1);
        // start and stop oscillator
        audioOsc.start(0);
        audioOsc.stop(this._audioContext.currentTime + 2.5);
      }
    });
  }

  calculateFreq(baseFreq: number, octave: number) {
    if (octave === 0) {
      return baseFreq
    } else {
      return Math.round(Math.pow(2, octave)*baseFreq*1000)/1000
    }
  }

  get noteFrequencies(): { A: number; D: number; E: number; F: number; G: number; H: number;
    J: number; K: number; L: number; O: number; P: number; S: number; T: number; U: number;
    W: number; Y: number; ";": number } {
    return this._noteFrequencies;
  }
}
