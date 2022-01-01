import {Component, OnDestroy, OnInit} from '@angular/core';
import {Oscillator} from "./oscillator";
import {OctaveEnum} from "../../enums/octave.enum";
import {OscillatorService} from "../../shared/oscillator.service";
import {OctavePipe} from "../../shared/octave.pipe";

@Component({
  selector: 'app-oscillator',
  templateUrl: './oscillator.component.html',
  styleUrls: ['./oscillator.component.css'],
  providers: [ OscillatorService, OctavePipe ],
})
export class OscillatorComponent  implements OnInit , OnDestroy {
  private _waves = ['sine','square', 'sawtooth', 'triangle'];
  private _displayOctave: string | number = '-';
  private _osc: Oscillator;

  constructor(private octavePipe: OctavePipe) {
    this._osc = new Oscillator();
  }

  get waves(): string[] {
    return this._waves;
  }

  set waves(value: string[]) {
    this._waves = value;
  }

  get displayOctave(): string | number {
    return this._displayOctave;
  }

  set displayOctave(value: string | number) {
    this._displayOctave = value;
  }

  get osc(): Oscillator {
    return this._osc;
  }

  set osc(value: Oscillator) {
    this._osc = value;
  }

  get oscillator(): Oscillator {
    return this._osc;
  }

  changeOctave(mode: number): void {
    this._osc.octave = this.octavePipe.transform(this._osc.octave, mode);
    this._displayOctave = (this._osc.octave === 0) ? '-' : this._osc.octave;
  }

  get octaveEnums(): typeof OctaveEnum {
    return OctaveEnum;
  }

  ngOnInit(){
    OscillatorService.addRef(this);
  }

  ngOnDestroy(){
    OscillatorService.removeRef(this);
  }
}
