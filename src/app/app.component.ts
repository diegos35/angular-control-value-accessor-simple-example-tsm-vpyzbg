import { Component, VERSION } from '@angular/core';
import {FormControl, FormBuilder} from '@angular/forms';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.scss' ]
})
export class AppComponent  {
  inputOne = 'initial input one';
  inputTwo = new FormControl('initial input two');

  form;

  constructor(private formBuilder: FormBuilder) {
    this.form = this.formBuilder.group({
      myFormControl: 'initial input three'
    });
  }
}
