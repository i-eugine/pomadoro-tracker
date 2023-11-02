import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalComponent } from './modal/modal.component';
import { OverlayModule } from '@angular/cdk/overlay';
import { PortalModule } from '@angular/cdk/portal';
import { ModalService } from './modal.service';



@NgModule({
  declarations: [ModalComponent],
  providers: [ModalService],
  imports: [
    CommonModule,
    OverlayModule,
    PortalModule
  ]
})
export class ModalModule { }
