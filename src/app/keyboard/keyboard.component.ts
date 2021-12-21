import {Component, HostListener} from '@angular/core';
import {PlayNoteService} from "../shared/play-note.service";

@Component({
  selector: 'app-keyboard',
  templateUrl: './keyboard.component.html',
  styleUrls: ['./keyboard.component.css'],
  providers: [PlayNoteService]
})
export class KeyboardComponent {

  constructor(private playNoteSer: PlayNoteService) {
  }

  @HostListener('document:keydown', ['$event'])  // listener must be in a component
  handleKeyboardEvent(event: KeyboardEvent) {
    let parseEventKey = event.key.toUpperCase();
    if (Object.keys(this.playNoteSer.noteFrequencies).includes(parseEventKey)) {
      this.playNoteSer.playNotes(parseEventKey);
    }
  }
  @HostListener('touchstart', ['$event'])
  handleTouchEvent(event: TouchEvent) {
    let element = event.target as HTMLElement;
    if (element.tagName === "KBD") {
      this.playNoteSer.playNotes(element.innerText);
    }
  }
}
