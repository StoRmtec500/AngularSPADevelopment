import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { RouterEvent, NavigationEnd, Route } from "@angular/router";
import { ScreenService } from "./shared/screen/screen.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent implements OnInit {
  constructor(private screen: ScreenService) {}

  isDemo: boolean;

  ngOnInit() {
    this.screen.isDemo.subscribe(data => (this.isDemo = data));
  }

  getMainFlex(): string {
    if (this.screen.isDemo || this.screen.isTablet || this.screen.isPhone) {
      return "100vw";
    } else {
      return "78vw";
    }
  }
}
