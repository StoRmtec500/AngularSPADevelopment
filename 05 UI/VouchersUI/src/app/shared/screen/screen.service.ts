import { Injectable } from "@angular/core";
import { MediaChange, MediaObserver } from "@angular/flex-layout";
import { BehaviorSubject, Subscription } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class ScreenService {
  watcher: Subscription;

  private ltmd: boolean;
  public lessThanMedium: BehaviorSubject<boolean> = new BehaviorSubject(
    this.ltmd
  );

  public Device: BehaviorSubject<string> = new BehaviorSubject("");

  constructor(private mediaObserver: MediaObserver) {
    this.subscribeIsPhone();
  }

  subscribeIsPhone() {
    this.watcher = this.mediaObserver.media$.subscribe(
      (change: MediaChange) => {
        this.Device.next(change.mqAlias);

        switch (change.mqAlias) {
          case "xs":
            this.ltmd = true;
            break;
          case "sm":
            this.ltmd = true;
            break;
          default:
            this.ltmd = false;
            break;
        }
        this.lessThanMedium.next(this.ltmd);
      }
    );
  }
}
