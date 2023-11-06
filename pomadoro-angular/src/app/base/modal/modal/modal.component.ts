import { BasePortalOutlet, CdkPortalOutlet, ComponentPortal, TemplatePortal } from '@angular/cdk/portal';
import { Component, ComponentRef, EmbeddedViewRef, ViewChild, ViewEncapsulation } from '@angular/core';
import { ModalRef } from '../modal-ref';

@Component({
  selector: 'pom-modal',
  // template: '<div cdkPortalOutlet></div>',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ModalComponent extends BasePortalOutlet {

  @ViewChild(CdkPortalOutlet, { static: true }) portalOutlet: CdkPortalOutlet | null = null

  constructor(private componentRef: ModalRef) {
    super();
  }

  attachComponentPortal<T>(portal: ComponentPortal<T>): ComponentRef<T> {
    console.log(this.portalOutlet)
    if (this.portalOutlet === null) {
      throw new Error('Portal not found');
    }

    if (this.portalOutlet.hasAttached()) {
      throw new Error('Content was already attached');
    }

    return this.portalOutlet.attachComponentPortal(portal);
  }

  attachTemplatePortal<C>(_portal: TemplatePortal<C>): EmbeddedViewRef<C> {
    throw new Error('Not implemented');
  }
}
