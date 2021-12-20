let nextID = 1;

export class Filter {
  get id(): number {
    return this._id;
  }

  set id(value: number) {
    this._id = value;
  }
  private _enabled: boolean;
  private _type: string;
  private _gain: number;
  private _frequency: number;
  private _qFactor: number;
  private _id: number;

  constructor() {
    this._enabled = false;
    this._type = 'highpass';
    this._gain = 0;
    this._frequency = 430;
    this._qFactor = 500;
    this._id = nextID++;
  }

  get enabled(): boolean {
    return this._enabled;
  }

  set enabled(value: boolean) {
    this._enabled = value;
  }

  get type(): string {
    return this._type;
  }

  set type(value: string) {
    this._type = value;
  }

  get gain(): number {
    return this._gain;
  }

  set gain(value: number) {
    this._gain = value;
  }

  get frequency(): number {
    return this._frequency;
  }

  set frequency(value: number) {
    this._frequency = value;
  }

  get qFactor(): number {
    return this._qFactor;
  }

  set qFactor(value: number) {
    this._qFactor = value;
  }
}
