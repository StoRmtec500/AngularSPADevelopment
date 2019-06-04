import { Component, OnInit } from "@angular/core";
import { Router, Route } from "@angular/router";
import { EventBusService } from "../event-bus/event-bus.service";
import {
  cmdToggleDemoMenu,
  cmdToggleAppsMenu
} from "../event-bus/action.types";
import { SnackbarService } from "../snackbar/snackbar.service";

@Component({
  selector: "app-navbar",
  templateUrl: "./navbar.component.html",
  styleUrls: ["./navbar.component.scss"]
})
export class NavbarComponent implements OnInit {
  constructor(
    private router: Router,
    private events: EventBusService,
    private sns: SnackbarService
  ) {}

  editorDisplayed: boolean;
  rootRoutes: Route[];

  ngOnInit() {
    this.editorDisplayed = false;
    this.rootRoutes = this.router.config.filter(
      item =>
        item.path.includes("/") == false &&
        item.path.includes("*") == false &&
        item.outlet == null
    );
    console.log(this.rootRoutes);
  }

  toggleDemoMenu() {
    this.events.triggerCmd(cmdToggleDemoMenu);
  }

  toggleEditor() {
    this.editorDisplayed = !this.editorDisplayed;
    if (this.editorDisplayed) {
      this.router.navigate(["", { outlets: { sidebarOutlet: "showeditor" } }]);
    } else {
      this.router.navigate(["", { outlets: { sidebarOutlet: null } }]);
    }
  }

  toggleApps() {
    // this.events.triggerCmd(cmdToggleAppsMenu);
    this.sns.displayAlert("Apps-Bar", "Not implemented!");
  }

  showUpload() {
    this.router.navigate(["", { outlets: { sidebarOutlet: "upload" } }]);
  }
}
