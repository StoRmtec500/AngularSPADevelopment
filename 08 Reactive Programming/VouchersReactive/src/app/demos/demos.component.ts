import { DemoItem } from "./demoItem";
import { DemoService } from "./demo.service";
import { ActivatedRoute, Params, Router, RouterState } from "@angular/router";
import { Component, OnInit } from "@angular/core";
import { SnackbarService } from "../shared/snackbar/snackbar.service";
import { EventBusService } from "../shared/event-bus/event-bus.service";
import { ScreenService } from "../shared/screen/screen.service";
import { cmdToggleDemoMenu } from "../shared/event-bus/action.types";

@Component({
  selector: "app-demos",
  templateUrl: "./demos.component.html",
  styleUrls: ["./demos.component.scss"],
  providers: [DemoService]
})
export class DemosComponent implements OnInit {
  title: string = "";
  demoName: string = "";
  componentName: string = "";
  demos: DemoItem[];
  device: string;
  showMenu = true;

  constructor(
    private route: ActivatedRoute,
    private demoService: DemoService,
    private screen: ScreenService,
    private events: EventBusService,
    private sns: SnackbarService
  ) {
    this.title = "Building the UI";
  }

  ngOnInit() {
    this.setDemoMenu();
    this.setDemoTitle();
    this.subscribeScreen();
    this.listenEvents();
  }

  private subscribeScreen() {
    this.screen.Device.subscribe(mq => {
      this.device = mq;
      this.showMenu = mq == "xs" ? false : true;
    });
  }

  private setDemoMenu() {
    this.demoService.getItems().subscribe(result => {
      this.demos = result;
    });
  }

  private setDemoTitle() {
    this.route.queryParams.subscribe((params: Params) => {
      let c: DemoItem = this.getComponent(params["title"]);
      this.demoName =
        params["title"] != null
          ? `Demo: ${params["title"]} - Component: ${
              c != undefined ? c.component : ""
            }`
          : "Please select a demo";
    });
  }

  private listenEvents() {
    this.events.Panel.subscribe(action => {
      switch (action) {
        case cmdToggleDemoMenu:
          this.showMenu = !this.showMenu;
          break;
          defaut: break;
      }
    });
  }

  getComponent(val): DemoItem {
    if (this.demos != undefined && this.demos != null) {
      return this.demos.find(el => {
        return el.title === val;
      });
    }
  }
}
