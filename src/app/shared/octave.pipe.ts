import { Pipe, PipeTransform } from '@angular/core';
import { OctaveEnum} from "../enums/octave.enum";

@Pipe({
  name: 'octavePipe'
})
export class OctavePipe implements PipeTransform {
  transform(octave: number, mode: number): number {
      if (mode === OctaveEnum.OCTAVE_INCREASE  && octave < 4) {
        octave++;
      } else if (mode === OctaveEnum.OCTAVE_DECREASE && octave > -3) {
        octave--;
      }
      return octave
  }
}
