import { Component, OnInit } from "@angular/core";
import { O365Service } from "./o365.service";
import { RecentFile } from "./model";
import { eps } from "../endpoints";

@Component({
  selector: "app-o365",
  templateUrl: "./o365.component.html",
  styleUrls: ["./o365.component.scss"]
})
export class O365Component implements OnInit {
  constructor(private service: O365Service) {}

  ngOnInit() {}

  recentFiles: RecentFile[];

  logIn() {
    this.service.logIn();
  }

  getRecentFiles() {
    let ep = eps.graphApiUri.toString();

    this.service.query(eps.graphApiUri, "/v1.0/me/drive/recent", response => {
      this.recentFiles = response.value.slice(0, 9);
      console.log(
        "Successfully fetched Recent Top Ten Documents:",
        this.recentFiles
      );
    });
  }

  uploadPDF() {}
}
