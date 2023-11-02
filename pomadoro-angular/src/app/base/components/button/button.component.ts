import { Component, HostBinding, Input, ViewEncapsulation } from '@angular/core';

export type ButtonColor = 'blue' | 'red' | 'green';

const ColorsMap: Record<ButtonColor, { base: string, hover:string, active: string}> = {
  blue: { base: 'Malibu', hover: 'Curious-Blue', active: 'Pelorous'},
  green: { base: 'Mountain-Meadow', hover: 'Mountain-Meadow-Dark', active: 'Deep-Sea'},
  red: { base: 'Tomato', hover: 'Dark-Coral', active: 'Mahogany'},
};

@Component({
  standalone: true,
  selector: 'pom-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ButtonComponent {
  @Input() set color(value: ButtonColor) {
    this.buttonColor = `var(--${ColorsMap[value].base})`;
    this.buttonColorHover = `var(--${ColorsMap[value].hover})`;
    this.buttonColorActive = `var(--${ColorsMap[value].active})`;
  }

  @HostBinding('style.--button-color') private buttonColor = '';
  @HostBinding('style.--button-color-hover') private buttonColorHover = '';
  @HostBinding('style.--button-color-active') private buttonColorActive = '';
}
