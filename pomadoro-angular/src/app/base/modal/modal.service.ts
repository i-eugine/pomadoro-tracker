import { Injectable, InjectionToken, Injector, Type } from '@angular/core';
import { Overlay, OverlayConfig } from '@angular/cdk/overlay'
import { ComponentPortal, BasePortalOutlet } from '@angular/cdk/portal';
import { ModalComponent } from './modal/modal.component';
import { ModalOverleyRef } from './modal/modal-overlay-ref';

type ModalData = Record<string, unknown>;

export const MODAL_DATA = new InjectionToken<ModalData>('ModalData')

@Injectable({
  providedIn: 'root'
})
export class ModalService {

  constructor(private overlay: Overlay) { }

  open<C, R>(component: Type<C>, data?: ModalData) {
    const overlayRef = this.createOverlay();
    const componentRef = new ModalOverleyRef(overlayRef);

    const containerPortal = new ComponentPortal(ModalComponent, null, this.getContainerInjector(componentRef));
    const containerInstance = overlayRef.attach(containerPortal).instance;

    const portal = new ComponentPortal(component, null, this.getComponentInjector(componentRef, data));
    containerInstance.attachComponentPortal(portal);

    const dialogRef = new ModalOverleyRef(overlayRef);
    overlayRef.backdropClick().subscribe(_ => dialogRef.close());

    return dialogRef;
  }

  private  getComponentInjector(componentRef: ModalOverleyRef, data?: ModalData) {
    return Injector.create({providers: [
      { provide: ModalOverleyRef, useValue: componentRef },
      { provide: MODAL_DATA, useValue: data }
    ]})
  }

  private  getContainerInjector(componentRef: ModalOverleyRef) {
    return Injector.create({providers: [{ provide: ModalOverleyRef, useValue: componentRef }]})
  }

  private createOverlay() {
    // Returns an OverlayConfig
    const overlayConfig = this.getOverlayConfig(); 

    // Returns an OverlayRef
    return this.overlay.create(overlayConfig);
  }

  private getOverlayConfig(): OverlayConfig {
    const positionStrategy = this.overlay.position().global().centerHorizontally().centerVertically();
    const scrollStrategy = this.overlay.scrollStrategies.block();

    const overlayConfig = new OverlayConfig({positionStrategy, scrollStrategy, hasBackdrop: true, });

    return overlayConfig;
  }
}
