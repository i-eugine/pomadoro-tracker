import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SettingsComponent } from './settings.component';
import { InputNumberComponent } from 'src/app/base/components/input-number/input-number.component';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { ButtonComponent } from 'src/app/base/components/button/button.component';



@NgModule({
  declarations: [
    SettingsComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    
    InputNumberComponent,
    ButtonComponent,

    RouterModule.forChild([{ path: '', component: SettingsComponent }])
  ]
})
export class SettingsModule { }
