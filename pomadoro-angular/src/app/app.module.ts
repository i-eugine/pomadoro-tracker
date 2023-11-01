import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CardComponent } from './components/card/card.component';
import { HeaderComponent } from './components/header/header.component';
import { InputNumberComponent } from './components/input-number/input-number.component';
import { InputRadioComponent } from './components/input-radio/input-radio.component';
import { InputTextComponent } from './components/input-text/input-text.component';
import { EditTaskModalComponent } from './components/edit-task-modal/edit-task-modal.component';
import { TaskComponent } from './components/task/task.component';
import { ButtonIconComponent } from './components/button-icon/button-icon.component';
import { ButtonTextComponent } from './components/button-text/button-text.component';
import { ButtonComponent } from './components/button/button.component';
import { IconComponent } from './components/icon/icon.component';

@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    HeaderComponent,
    InputNumberComponent,
    InputRadioComponent,
    InputTextComponent,
    EditTaskModalComponent,
    TaskComponent,
    ButtonIconComponent,
    ButtonTextComponent,
    ButtonComponent,
    IconComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
