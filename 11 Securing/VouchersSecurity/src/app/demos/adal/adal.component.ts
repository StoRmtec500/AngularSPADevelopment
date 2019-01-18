import { Component, OnInit } from "@angular/core";
import { RecentFile } from "./model";
import { O365Service } from "./o365.service";
import { environment } from "src/environments/environment";

@Component({
  selector: "app-adal",
  templateUrl: "./adal.component.html",
  styleUrls: ["./adal.component.scss"]
})
export class AdalComponent implements OnInit {
  constructor(private service: O365Service) {}

  ngOnInit() {}

  recentFiles: RecentFile[];

  logIn() {
    this.service.logIn();
  }

  getRecentFiles() {
    this.service.query(
      environment.o365Endpoints.graphApiUri,
      "/v1.0/me/drive/recent",
      response => {
        this.recentFiles = response.value.slice(0, 9);
        console.log(
          "Successfully fetched Recent Top Ten Documents:",
          this.recentFiles
        );
      }
    );
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
