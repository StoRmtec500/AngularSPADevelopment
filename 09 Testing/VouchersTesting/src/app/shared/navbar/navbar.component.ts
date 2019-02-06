import { Component, OnInit } from "@angular/core";
import { Route, Router } from "@angular/router";
import { cmdToggleDemoMenu } from "../event-bus/action.types";
import { EventBusService } from "../event-bus/event-bus.service";
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

  editorDisplayed: boolean = false;
  rootRoutes: Route[];

  ngOnInit() {
    this.getRoutes();
  }

  private getRoutes() {
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
    this.sns.displayAlert("Apps-Bar", "Not implemented!");
  }

  showUpload() {
    this.router.navigate(["", { outlets: { sidebarOutlet: "upload" } }]);
  }
}
