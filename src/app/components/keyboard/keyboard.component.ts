import {Component, HostListener} from '@angular/core';
import {PlayNoteService} from "../../shared/play-note.service";
import {NoteFrequencies} from "../../enums/note-frequencies";


@Component({
  selector: 'app-keyboard',
  templateUrl: './keyboard.component.html',
  styleUrls: ['./keyboard.component.css'],
})
export class KeyboardComponent {

  constructor(private playNoteSer: PlayNoteService) {
  }

  @HostListener('document:keydown', ['$event'])  // listener must be in a component
  handleKeyboardEvent(event: KeyboardEvent) {
    let key = this.isSupportedKey(event);
    if (key) {
      this.playNoteSer.playNotes(key);
      this.animateKeyPress(key);
    }
  }

  @HostListener('touchstart', ['$event'])
  handleClickTouchEvent(event: TouchEvent | MouseEvent) {
    let element = event.target as HTMLElement;
    if (element.tagName === "KBD") {
      this.playNoteSer.playNotes(element.innerText);
      this.animateKeyPress(element.innerText);
    }
  }

  @HostListener('document:keyup', ['$event'])
  @HostListener('touchend', ['$event'])
  handleKeyClickTouchRelease(event: TouchEvent | MouseEvent | KeyboardEvent) {
    if ("key" in event) {
      let key = this.isSupportedKey(event);
      if (key) {
        let element = document.getElementById(key);
        // @ts-ignore
        this.animateKeyRelease(element);
      }
    } else {
      let element = event.target as HTMLElement;
      if (element.tagName === "KBD") {
        this.animateKeyRelease(element);
      }
    }
  }

  animateKeyPress(key: string) {
    let element = document.getElementById(key);
    if (element != null) {
      element.style.backgroundColor = "gray";
      element.style.color = "white";
    }
  }

  animateKeyRelease(element: HTMLElement) {
    let bgColor = "rgb(33, 37, 41)";
    let color = "white";
    // @ts-ignore
    if (element.parentElement.id === "white-keys-container") {
      bgColor = "white";
      color = "black";
    }
    element.style.backgroundColor = bgColor;
    element.style.color = color;
  }

  isSupportedKey(event: KeyboardEvent) {
    let key = event.key.toUpperCase();
    return (Object.keys(NoteFrequencies).includes(`${key}`)) ? key : ''
  }
}
