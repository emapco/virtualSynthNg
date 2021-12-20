import { NgModule } from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule  } from '@angular/forms';
import { CommonModule} from '@angular/common';
import { AppComponent } from './app.component';

import {FilterComponent} from "./filter/filter.component";
import {KeyboardComponent} from "./keyboard/keyboard.component";
import {OscillatorComponent} from "./oscillator/oscillator.component";
import {MatSliderModule} from "@angular/material/slider";
import {MatSelectModule} from "@angular/material/select";
import {MatFormFieldModule} from '@angular/material/form-field';
import {OscillatorService} from "./shared/oscillator.service";
import {MatInputModule} from "@angular/material/input";
import {PlayNoteService} from "./shared/play-note.service";
import {OctavePipe} from "./shared/octave.pipe";

@NgModule({
  declarations: [
    AppComponent,
    FilterComponent,
    KeyboardComponent,
    OscillatorComponent,
    OctavePipe,
  ],
  imports: [
    BrowserModule,
    FlexLayoutModule,
    CommonModule,
    FormsModule,
    MatSliderModule,
    MatSelectModule,
    MatFormFieldModule,
    MatInputModule,
  ],
  providers: [OscillatorService, PlayNoteService],
  bootstrap: [AppComponent]
})
export class AppModule { }
