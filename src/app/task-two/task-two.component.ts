import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-task-two',
  templateUrl: './task-two.component.html',
  styleUrls: ['./task-two.component.css']
})
export class TaskTwoComponent implements OnInit {
  myForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.myForm = this.fb.group({
      Alphanumeric: ['', [Validators.required, Validators.pattern('^[a-zA-Z0-9 ]*$')]],
      OnlyLetters: ['', [Validators.required, Validators.pattern('^[a-zA-Z\u00C0-\u017F !"#$%&\'()*+,\-./:;<=>?@[\\]^_`{|}~]*$')]],
      NoArabicLetters: ['', [
        Validators.required,
        Validators.pattern('^[a-zA-Z0-9 !@#$%^&*()\\-_=+\\[\\]{};:\'",.<>/?`~]*$')
      ]]
    });
  }

  ngOnInit(): void {
  }
}
