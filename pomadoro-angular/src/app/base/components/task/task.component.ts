import { Component, HostBinding, Input, ViewEncapsulation } from '@angular/core';
import { ITask } from 'src/app/models/task.interface';
import { IconComponent, IconName } from '../icon/icon.component';
import { ButtonIconComponent } from '../button-icon/button-icon.component';

@Component({
  standalone: true,
  selector: 'pom-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss'],
  encapsulation: ViewEncapsulation.None,

  imports: [IconComponent, ButtonIconComponent]
})
export class TaskComponent {

  _task!: ITask;
  @Input() set task(value: ITask) {
    this._task = value;

    this.category = `var(--categor-${value.category})`
    this.priority = `var(--prior-${value.priority})`
    this.priorityActive = `var(--prior-${value.priority}-active)`
  }

  @HostBinding('style.--category-color') private category = '';
  @HostBinding('style.--priority-color') private priority = '';
  @HostBinding('style.--priority-color-active') private priorityActive = '';

  readonly tomatoIcon = IconName.tomato;
  readonly timerIcon = IconName.timer;
  readonly editIcon = IconName.edit;
}
