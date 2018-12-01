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
    this.service.query(eps.graphApiUri, "/v1.0/me/drive/recent", response => {
      this.recentFiles = response.value.slice(0, 9);
      console.log(
        "Successfully fetched Recent Top Ten Documents:",
        this.recentFiles
      );
    });
  }

  createEvent() {
    var evt = {
      Subject: "A Graph Event",
      Body: {
        ContentType: "HTML",
        Content: "The Super Fancy MS Graph Event"
      },
      Start: {
        DateTime: "2018-10-13T00:00:00",
        TimeZone: "UTC"
      },
      End: {
        DateTime: "2018-10-14T00:00:00",
        TimeZone: "UTC"
      }
    };

    this.service.createEvent(evt, "/v1.0/me/calendar/events");
  }
}
