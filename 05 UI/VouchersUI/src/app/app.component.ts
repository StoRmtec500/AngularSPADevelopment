import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { RouterEvent, Route } from "@angular/router";
import { ScreenService } from "./shared/screen/screen.service";

@Component({
  selector: "vouchers-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent implements OnInit {
  constructor(private screen: ScreenService) {}

  ngOnInit() {
    // this.evalScreen();
  }

  // scaling: string;

  // evalScreen() {
  //   this.screen.lessThanMedium.subscribe(ltm =>
  //     ltm
  //       ? (this.scaling = "grid-template-columns: 1fr")
  //       : (this.scaling = "grid-template-columns: 5fr 1fr")
  //   );
  // }

  // setSideDivWidth() {
  //   return this.isDemo ? "flexSideHidden" : "mainBox flexSide";
  // }

  // setSpacer() {
  //   return this.isDemo ? "" : "spacer";
  // }

  // setMainDivWidth() {
  //   return this.isDemo ? "flexMainBig" : "mainBox flexMain";
  // }
}
