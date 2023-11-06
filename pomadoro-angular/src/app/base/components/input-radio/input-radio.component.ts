import { Component, Input, ViewEncapsulation, forwardRef } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';

type InputRadioFunc = <T>(_: T) => void;

@Component({
  standalone: true,
  selector: 'pom-input-radio',
  templateUrl: './input-radio.component.html',
  styleUrls: ['./input-radio.component.scss'],
  encapsulation: ViewEncapsulation.None,

  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => InputRadioComponent),
      multi: true
    }
  ],
})
export class InputRadioComponent<T> {
  @Input() id = '';
  @Input() name = '';
  @Input() title = '';
  @Input() optionValue!: T;

  onChange: InputRadioFunc = () => {};
  onTouch:  InputRadioFunc = () => {};

  _value!: T; // this is the updated value that the class accesses
  @Input() set value(val: T) {  // this value is updated by programmatic changes if( val !== undefined && this.val !== val){
    this._value = val;

    this.onChange(val);
    this.onTouch(val);
  }

  writeValue(value: T) { this.value = value }

  registerOnChange(fn:  InputRadioFunc) { this.onChange = fn }
  registerOnTouched(fn:  InputRadioFunc) { this.onTouch = fn }
}
