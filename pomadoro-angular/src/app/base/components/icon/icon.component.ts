import { Component, HostBinding, Input, ViewEncapsulation } from '@angular/core';

export enum IconName {
  add = 'add',
  arrowCircle = 'arrow-circle',
  arrowLeft = 'arrow-left',
  arrowRight = 'arrow-right',
  arrowUp = 'arrow-up',
  check = 'check',
  close = 'close',
  edit = 'edit',
  globalListArrowDown = 'global-list-arrow-down',
  globalListArrowRight = 'global-list-arrow-right',
  list = 'list',
  minus = 'minus',
  settings = 'settings',
  statistics = 'statistics',
  timer = 'timer',
  tomatoError = 'tomato-error',
  tomatoInfo = 'tomato-info',
  tomatoSuccess = 'tomato-success',
  tomatoWarning = 'tomato-warning',
  tomato = 'tomato',
  trash = 'trash',
}

@Component({
  standalone: true,
  selector: 'pom-icon',
  template: '',
  styleUrls: ['./icon.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class IconComponent {
  @Input() set name(value: IconName) {
    this.className = `icon--${value}`;
  }

  @HostBinding('class') className = '';
}
