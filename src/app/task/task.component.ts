import { Component } from '@angular/core';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css'] 
})
export class TaskComponent {

  Alphanumeric(event: KeyboardEvent) {
    const keyPressed = event.key;
    const allowedCharacters: any = /^[a-zA-Z0-9 ]*$/;

    if (!allowedCharacters.test(keyPressed)) {
      event.preventDefault();
    }
  }

  OnlyLetters(event: KeyboardEvent) {
    const keyPressed = event.key;
    const allowedCharacters: any = /^[a-zA-Z\u00C0-\u017F !"#$%&'()*+,\-./:;<=>?@\[\]^_`{|}~]*$/;

    if (!allowedCharacters.test(keyPressed)) {
      event.preventDefault();
    }
  }
  NoArabicLetters(event: KeyboardEvent) {
    const keyPressed = event.key;
    const allowedCharacters: any = /^[a-zA-Z0-9 !@#$%^&*()\-_=+[\]{};:'",.<>/?`~]*$/;

    if (!allowedCharacters.test(keyPressed)) {
      event.preventDefault();
    }
  }
}