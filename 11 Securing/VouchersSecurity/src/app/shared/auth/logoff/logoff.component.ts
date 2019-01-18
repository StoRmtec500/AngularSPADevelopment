import { Component, OnInit } from "@angular/core";
import { AuthService } from "../auth.service";

@Component({
  selector: "app-logoff",
  templateUrl: "./logoff.component.html",
  styleUrls: ["./logoff.component.scss"]
})
export class LogoffComponent implements OnInit {
  constructor(public auth: AuthService) {}

  ngOnInit() {}

  logOut() {
    this.auth.logOff();
  }
}
