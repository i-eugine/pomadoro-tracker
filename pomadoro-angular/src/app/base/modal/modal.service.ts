import { Injectable, InjectionToken, Injector, Type } from '@angular/core';
import { Overlay, OverlayConfig, OverlayRef } from '@angular/cdk/overlay';
import { ComponentPortal, BasePortalOutlet } from '@angular/cdk/portal';
import { ModalComponent } from './modal/modal.component';
import { ModalRef as ModalRef } from './modal-ref';
import { take, takeUntil } from 'rxjs';

type ModalData = Record<string, unknown>;

export const MODAL_DATA = new InjectionToken<ModalData>('ModalData');

@Injectable({
  providedIn: 'root',
})
export class ModalService {
  constructor(private overlay: Overlay) {}

  open<C, R>(component: Type<C>, data?: ModalData) {
    const overlayRef = this.createOverlay();
    const modalRef = this.createModalRef(overlayRef);

    const containerPortal = new ComponentPortal(
      ModalComponent,
      null,
      this.getContainerInjector(modalRef)
    );
    const containerInstance = overlayRef.attach(containerPortal).instance;

    const portal = new ComponentPortal(
      component,
      null,
      this.getComponentInjector(modalRef, data)
    );
    containerInstance.attachComponentPortal(portal);

    return modalRef;
  }

  private createModalRef<R>(overlayRef: OverlayRef): ModalRef<R> {
    const modalRef = new ModalRef<R>();
    const detached$ = overlayRef.detachments();

    modalRef
      .beforeClose()
      .pipe(take(1), takeUntil(detached$))
      .subscribe(() => overlayRef.detachBackdrop());

    modalRef
      .afterClosed()
      .pipe(take(1), takeUntil(detached$))
      .subscribe(() => overlayRef.dispose());

    overlayRef
      .backdropClick()
      .pipe(take(1), takeUntil(detached$))
      .subscribe(() => modalRef.close());

    return modalRef;
  }

  private getComponentInjector<R>(componentRef: ModalRef<R>, data?: ModalData) {
    return Injector.create({
      providers: [
        { provide: ModalRef, useValue: componentRef },
        { provide: MODAL_DATA, useValue: data },
      ],
    });
  }

  private getContainerInjector(componentRef: ModalRef) {
    return Injector.create({
      providers: [{ provide: ModalRef, useValue: componentRef }],
    });
  }

  private createOverlay() {
    const overlayConfig = this.getOverlayConfig();
    return this.overlay.create(overlayConfig);
  }

  private getOverlayConfig(): OverlayConfig {
    const positionStrategy = this.overlay
      .position()
      .global()
      .centerHorizontally()
      .centerVertically();
    const scrollStrategy = this.overlay.scrollStrategies.block();

    return new OverlayConfig({
      positionStrategy,
      scrollStrategy,
      hasBackdrop: true,
    });
  }
}
