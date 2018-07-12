import { Component, OnInit } from "@angular/core";
import { Subscription } from "rxjs/Subscription";
import { ObservableMedia, MediaChange } from "@angular/flex-layout";

@Component({
  selector: "app-flex-layout-api",
  templateUrl: "./flex-layout-api.component.html",
  styleUrls: ["./flex-layout-api.component.css"]
})
export class FlexLayoutApiComponent implements OnInit {
  constructor(private obsMedia: ObservableMedia) {
    this.subscribeIsPhone();
  }

  //isPhone
  watcher: Subscription;

  isPhone: boolean;
  isTablet: boolean;

  ngOnInit() {}

  subscribeIsPhone() {
    this.watcher = this.obsMedia.subscribe((change: MediaChange) => {
      switch (change.mqAlias) {
        case "xs":
          this.isPhone = true;
          this.isTablet = false;
          break;
        case "sm":
          this.isPhone = false;
          this.isTablet = true;
          break;
        default:
          this.isPhone = false;
          this.isTablet = false;
          break;
      }

      this.isPhone = change.mqAlias === "xs";

      console.log("Current Device Screen: ", change.mqAlias);
      console.log("isPhone: ", this.isPhone);
      console.log("isTablet: ", this.isTablet);
    });
  }
}
