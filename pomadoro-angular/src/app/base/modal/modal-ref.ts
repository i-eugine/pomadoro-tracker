import { Subject } from "rxjs";

// TODO: check animation for closing and appearing
export class ModalRef<TResult> {

  private _beforeClosed = new Subject<TResult | null>()
  private _closed = new Subject<TResult | null>()
  private _afterClosed = new Subject<TResult | null>()

  close(result: TResult | null  = null): void {
    this.emitAction(this._beforeClosed)
    this.emitAction(this._closed, result);
    this.emitAction(this._afterClosed);
  }

  beforeClose = () => this._beforeClosed.asObservable();
  closed = () => this._closed.asObservable();
  afterClosed = () => this._afterClosed.asObservable();

  private emitAction(action: Subject<TResult | null>, result: TResult | null = null) {
    action.next(result);
    action.complete();
  }
}