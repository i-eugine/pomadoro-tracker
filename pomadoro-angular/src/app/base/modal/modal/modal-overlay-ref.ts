import { OverlayRef } from "@angular/cdk/overlay";

export class ModalOverleyRef {

  constructor(private overlayRef: OverlayRef) { }

  close(): void {
    this.overlayRef.dispose();
  }
}