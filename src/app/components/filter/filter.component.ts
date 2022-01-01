import {Component, OnInit} from '@angular/core';
import {Filter} from "./filter";
import {OscillatorService} from "../../shared/oscillator.service";
import {Oscillator} from "../oscillator/oscillator";

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css'],
  providers: [OscillatorService]
})
export class FilterComponent implements OnInit {
  private _filterTypes: string[] = ["highpass", "lowpass", "bandpass", "lowshelf", "highshelf", "peaking", "notch"]
  private _displaySliderFreq: number = 49.5;
  private _filter: Filter;
  private _appliedOsc: number = 0;

  constructor(public oscService: OscillatorService) {
    this._filter = new Filter();
  }

  // used for displayWith directive
  formatFrequency(value: number) {
    let oldMin = 1;
    let oldMax = 100;
    let newMin = Math.log(10);
    let newMax = Math.log(20000);
    let factor = (newMax-newMin) / (oldMax - oldMin);
    return Math.round(Math.exp(newMin + factor*(value-oldMin)));
  }

  formatInverseFrequency(value: number) {
    let oldMin = 1;
    let oldMax = 100;
    let newMin = Math.log(10);
    let newMax = Math.log(20000);
    let factor = (newMax-newMin) / (oldMax - oldMin);
    return Math.round((Math.log(value)- newMin)/factor + oldMin);
  }

  // called so ngModelChange updates filter attribute with the scaled value
  updateFrequency(event: any) {
    this._displaySliderFreq = Number(event);
    return this.formatFrequency(Number(event));
  }

  // called when clicking on a filter oscillator button
  changeFilter(osc: Oscillator) {
    this._appliedOsc = osc.id-1;  // -1 for array indexing
    this._filter = osc.filter;
    this._displaySliderFreq = this.formatInverseFrequency(this._filter.frequency);
  }

  get filterTypes(): string[] {
    return this._filterTypes;
  }

  set filterTypes(value: string[]) {
    this._filterTypes = value;
  }

  get displaySliderFreq(): number {
    return this._displaySliderFreq;
  }

  set displaySliderFreq(value: number) {
    this._displaySliderFreq = value;
  }

  get filter(): Filter {
    return this._filter;
  }

  set filter(value: Filter) {
    this._filter = value;
  }

  ngOnInit(): void {
    this._filter = this.oscService.oscillators[this._appliedOsc].filter;
    this._displaySliderFreq = this.formatInverseFrequency(this._filter.frequency);
  }
}
