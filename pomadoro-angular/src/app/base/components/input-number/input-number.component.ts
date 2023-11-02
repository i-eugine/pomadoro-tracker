import { Component, Input, ViewEncapsulation, forwardRef } from '@angular/core';
import { ButtonIconComponent } from '../button-icon/button-icon.component';
import { IconName } from '../icon/icon.component';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

type InputNumberFunc = (_: number) => void;

@Component({
  standalone: true,
  selector: 'pom-input-number',
  templateUrl: './input-number.component.html',
  styleUrls: ['./input-number.component.scss'],
  encapsulation: ViewEncapsulation.None,

  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => InputNumberComponent),
      multi: true
    }
  ],

  imports: [ButtonIconComponent]
})
export class InputNumberComponent implements ControlValueAccessor {
  readonly addIcon = IconName.add;
  readonly minusIcon = IconName.minus;

  onChange: InputNumberFunc = () => {};
  onTouch:  InputNumberFunc = () => {};

  _value = 0 // this is the updated value that the class accesses
  @Input() set value(val: number) {  // this value is updated by programmatic changes if( val !== undefined && this.val !== val){
    this._value = val;

    this.onChange(val);
    this.onTouch(val);
  }

  writeValue(value: number) { this.value = value }

  registerOnChange(fn:  InputNumberFunc) { this.onChange = fn }
  registerOnTouched(fn:  InputNumberFunc) { this.onTouch = fn }
}
