import {Injectable} from '@angular/core';

import {Oscillator} from '../components/oscillator/oscillator'
import {OscillatorComponent} from "../components/oscillator/oscillator.component";

@Injectable({
  providedIn: 'root'
})
export class OscillatorService {
  private static oscillators: OscillatorComponent[] = [];

  constructor() {
  }

  /**
   * Returns an array with each components Oscillator object
   * for the creation of OscillatorNodes
   */
  get oscillators() {
    let oscObjs: Oscillator[] = []
    OscillatorService.oscillators.forEach((osc) => {
      oscObjs.push(osc.oscillator);
    });
    return oscObjs;
  }

  /**
   * Adds a OscillatorComponent instance to the array.
   * Utilized to access the component's Oscillator attributes
   * for the creation of the OscillatorNodes
   * @param oscillatorComp
   */
  static addRef(oscillatorComp: OscillatorComponent) {
    this.oscillators.push(oscillatorComp)
  }

  /**
   * Removes a OscillatorComponent instance from the array.
   * @param oscillatorComp
   */
  static removeRef(oscillatorComp: OscillatorComponent) {
    this.oscillators.forEach((item, index) => {
      if (item === oscillatorComp) this.oscillators.splice(index, 1);
    });
  }
}

