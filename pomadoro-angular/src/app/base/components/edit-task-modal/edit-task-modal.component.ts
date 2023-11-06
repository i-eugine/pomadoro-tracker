import { Component, ViewEncapsulation } from '@angular/core';
import { InputTextComponent } from '../input-text/input-text.component';
import { InputRadioComponent } from '../input-radio/input-radio.component';
import { Task, TaskCategory, TaskPriority } from 'src/app/models/task';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from '../button/button.component';
import { ModalRef } from '../../modal/modal-ref';

@Component({
  standalone: true,
  selector: 'pom-edit-task-modal',
  templateUrl: './edit-task-modal.component.html',
  styleUrls: ['./edit-task-modal.component.scss'],
  encapsulation: ViewEncapsulation.None,

  imports: [
    CommonModule, 
    InputTextComponent,
    InputRadioComponent,
    ButtonComponent
  ]
})
export class EditTaskModalComponent {

  categoryColorMap: Record<TaskCategory, string> = {
    work: "var(--categor-work)",
    education: "var(--categor-education)",
    hobby: "var(--categor-hobby)",
    sport: "var(--categor-sport)",
    other: "var(--categor-other)",
  };
  priorityColorMap: Record<TaskPriority, string> = {
    urgent: "var(--prior-urgent)",
    hight: "var(--prior-hight)",
    middle: "var(--prior-middle)",
    low: "var(--prior-low)",
  };

  categoryRadiosList: Array<{ value: TaskCategory; title: string }> = [
    { value: "work", title: "Work" },
    { value: "education", title: "Education" },
    { value: "hobby", title: "Hobby" },
    { value: "sport", title: "Sport" },
    { value: "other", title: "Ohter" },
  ];

  priorityRadiosList: Array<{ value: TaskPriority; title: string }> = [
    { value: "urgent", title: "Urgent" },
    { value: "hight", title: "Hight" },
    { value: "middle", title: "Middle" },
    { value: "low", title: "Low" },
  ];

  constructor(private modalRef: ModalRef<Task>) {}

  closeHandler() {
    this.modalRef.close();
  }
}
