import { Injectable } from '@angular/core';

import { Oscillator } from '../oscillator/oscillator'
import {OscillatorComponent} from "../oscillator/oscillator.component";

@Injectable({
  providedIn: 'root'
})
export class OscillatorService {
  private static oscillators: OscillatorComponent[] = [];

  constructor() { }

  get oscillators() {
    let oscObjs: Oscillator[] = []
    OscillatorService.oscillators.forEach( (osc ) => {
      oscObjs.push(osc.oscillator);
    });
    return oscObjs;
  }

  static addRef(oscillatorComp: OscillatorComponent) {
    this.oscillators.push(oscillatorComp)
  }

  static removeRef(oscillatorComp: OscillatorComponent) {
    this.oscillators.forEach( (item, index) => {
      if (item === oscillatorComp) this.oscillators.splice(index, 1)
    });
  }
}

