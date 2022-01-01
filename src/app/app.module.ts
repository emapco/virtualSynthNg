import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FlexLayoutModule} from '@angular/flex-layout';
import {FormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common';
import {AppComponent} from './app.component';

import {FilterComponent} from "./components/filter/filter.component";
import {KeyboardComponent} from "./components/keyboard/keyboard.component";
import {OscillatorComponent} from "./components/oscillator/oscillator.component";
import {MatSliderModule} from "@angular/material/slider";
import {MatSelectModule} from "@angular/material/select";
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from "@angular/material/input";
import {SharedModule} from "./shared/shared.module";


@NgModule({
  declarations: [
    AppComponent,
    FilterComponent,
    KeyboardComponent,
    OscillatorComponent,
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
    SharedModule
  ],
  bootstrap: [AppComponent]
})

export class AppModule {
}
