import {Component, OnInit, forwardRef} from '@angular/core';
import {ControlValueAccessor, FormControl, NG_VALUE_ACCESSOR} from '@angular/forms';


@Component({
  selector: 'app-custom-input',
  templateUrl: './custom-input.component.html',
  styleUrls: ['./custom-input.component.scss'],

  // Step 1: copy paste this providers property
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => CustomInputComponent),
      multi: true
    }
  ]
})
// Step 2: Add "implements ControlValueAccessor"
export class CustomInputComponent implements ControlValueAccessor {

  // Step 3: Copy paste this stuff here
  onChange: any = () => {}
  onTouch: any = () => {}
  registerOnChange(fn: any): void {
    this.onChange = fn;
  }
  registerOnTouched(fn: any): void {
    this.onTouch = fn;
  }

  // Step 4: Define what should happen in this component, if something changes outside
  input: string;
  writeValue(input: string) {
    this.input = input;
  }

  // Step 5: Handle what should happen on the outside, if something changes on the inside
  // in this simple case, we've handled all of that in the .html
  // a) we've bound to the local variable with ngModel
  // b) we emit to the ouside by calling onChange on ngModelChange

}