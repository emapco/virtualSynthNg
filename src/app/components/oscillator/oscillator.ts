import { Filter } from '../filter/filter'
let nextID: number = 1

export class Oscillator {
  private _on: boolean;
  private _wave: string;
  private _gain: number;
  private _octave: number;
  private _detuneEnabled: boolean;
  private _detune: number;
  private _id: number;
  private _filter: Filter;

  constructor() {
    this._id = nextID++;
    this._on = (this._id == 1);
    this._wave = 'sine';
    this._gain = 50;
    this._octave = 0;
    this._detuneEnabled = false;
    this._detune = 0;

    this._filter = new Filter();
  }

  get on(): boolean {
    return this._on;
  }

  set on(value: boolean) {
    this._on = value;
  }

  get wave(): string {
    return this._wave;
  }

  set wave(value: string) {
    this._wave = value;
  }

  get gain(): number {
    return this._gain;
  }

  set gain(value: number) {
    this._gain = value;
  }

  get octave(): number {
    return this._octave;
  }

  set octave(value: number) {
    this._octave = value;
  }

  get detuneEnabled(): boolean {
    return this._detuneEnabled;
  }

  set detuneEnabled(value: boolean) {
    this._detuneEnabled = value;
  }

  get detune(): number {
    return this._detune;
  }

  set detune(value: number) {
    this._detune = value;
  }

  get id(): number {
    return this._id;
  }

  set id(value: number) {
    this._id = value;
  }

  get filter(): Filter {
    return this._filter;
  }

  set filter(value: Filter) {
    this._filter = value;
  }
}
