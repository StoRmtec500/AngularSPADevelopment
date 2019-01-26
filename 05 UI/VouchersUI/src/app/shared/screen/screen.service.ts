import { Injectable } from "@angular/core";
import { Route, Router, RouterEvent } from "@angular/router";
import { BehaviorSubject, Observable, Subscription } from "rxjs";
import { ObservableMedia, MediaChange } from "@angular/flex-layout";

@Injectable({
  providedIn: "root"
})
export class ScreenService {
  watcher: Subscription;

  private ltmd: boolean;
  public lessThanMedium: BehaviorSubject<boolean> = new BehaviorSubject(
    this.ltmd
  );

  constructor(private obsMedia: ObservableMedia) {
    this.subscribeIsPhone();
  }

  subscribeIsPhone() {
    this.watcher = this.obsMedia.subscribe((change: MediaChange) => {
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
    });
  }
}
