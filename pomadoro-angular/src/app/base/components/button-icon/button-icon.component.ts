import { Component, HostBinding, Input, ViewEncapsulation } from '@angular/core';
import { IconComponent, IconName } from '../icon/icon.component';

@Component({
  standalone: true,
  selector: 'pom-button-icon',
  templateUrl: './button-icon.component.html',
  styleUrls: ['./button-icon.component.scss'],
  encapsulation: ViewEncapsulation.None,

  imports: [IconComponent]
})
export class ButtonIconComponent {
  @Input() name!: IconName; 
}
