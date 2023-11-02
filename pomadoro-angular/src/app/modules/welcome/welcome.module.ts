import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WelcomeComponent } from './welcome.component';
import { CardComponent } from 'src/app/base/components/card/card.component';
import { ButtonComponent } from 'src/app/base/components/button/button.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    WelcomeComponent
  ],
  imports: [
    CommonModule,


    CardComponent,
    ButtonComponent,
  ]
})
export class WelcomeModule { }
