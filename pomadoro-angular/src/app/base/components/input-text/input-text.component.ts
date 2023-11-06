import { Component, Input, ViewEncapsulation } from '@angular/core';
import { ControlValueAccessor } from '@angular/forms';

type InputTextFunc = (_: string) => void;


@Component({
  standalone: true,
  selector: 'pom-input-text',
  templateUrl: './input-text.component.html',
  styleUrls: ['./input-text.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class InputTextComponent implements ControlValueAccessor {
  @Input() id = '';
  @Input() placeholder = '';
  @Input() title = '';

  onChange: InputTextFunc = () => {};
  onTouch:  InputTextFunc = () => {};

  _value = '0';
  @Input() set value(val: string) { 
    this._value = val;

    this.onChange(val);
    this.onTouch(val);
  }

  writeValue(value: string) { this.value = value }

  registerOnChange(fn:  InputTextFunc) { this.onChange = fn }
  registerOnTouched(fn:  InputTextFunc) { this.onTouch = fn } 
}
