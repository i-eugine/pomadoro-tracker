import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TasksComponent } from './tasks.component';
import { RouterModule } from '@angular/router';
import { ButtonIconComponent } from 'src/app/base/components/button-icon/button-icon.component';
import { TaskComponent } from 'src/app/base/components/task/task.component';


@NgModule({
  declarations: [
    TasksComponent
  ],
  imports: [
    CommonModule,

    ButtonIconComponent,
    TaskComponent,

    RouterModule.forChild([{ path: '', component: TasksComponent}])
  ]
})
export class TasksModule { }
