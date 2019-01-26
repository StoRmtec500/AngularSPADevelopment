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
  constructor() {}

  ngOnInit() {}
}
