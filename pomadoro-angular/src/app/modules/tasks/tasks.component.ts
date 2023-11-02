import { Component, ViewEncapsulation } from '@angular/core';
import { IconName } from 'src/app/base/components/icon/icon.component';
import { ITask } from 'src/app/models/task.interface';

@Component({
  selector: 'pom-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class TasksComponent {

  readonly addIcon = IconName.add;
  
  tasks: ITask[] = [
    {
      category: "hobby",
      priority: "urgent",
      date: "TODAY",
      caption: "Lorem ipsum dolor sit.",
      note: " Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex, incidunt.",
      timer: 3,
    },
    {
      category: "sport",
      priority: "hight",
      date: "TODAY",
      caption: "Lorem ipsum dolor sit.",
      note: " Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex, incidunt.",
      timer: 3,
    },
    {
      category: "work",
      priority: "hight",
      date: "TODAY",
      caption: "Lorem ipsum dolor sit.",
      note: " Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex, incidunt.",
      timer: 3,
    },
    {
      category: "education",
      priority: "middle",
      date: "TODAY",
      caption: "Lorem ipsum dolor sit.",
      note: " Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex, incidunt.",
      timer: 3,
    },
    {
      category: "other",
      priority: "low",
      date: "TODAY",
      caption: "Lorem ipsum dolor sit.",
      note: " Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex, incidunt.",
      timer: 3,
    },
  ];
}
