import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TimerComponent } from './timer.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    TimerComponent
  ],
  imports: [
    CommonModule,

    RouterModule.forChild([{ path: '', component: TimerComponent}])
  ]
})
export class TimerModule { }
