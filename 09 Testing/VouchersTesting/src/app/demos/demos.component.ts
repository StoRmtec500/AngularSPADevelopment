import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Params } from "@angular/router";
import { DemoService } from "./demo.service";
import { DemoItem } from "./demoItem";
import { environment } from "src/environments/environment";
import { ScreenService } from "../shared/screen/screen.service";

@Component({
  selector: "app-demos",
  templateUrl: "./demos.component.html",
  styleUrls: ["./demos.component.scss"],
  providers: [DemoService]
})
export class DemosComponent implements OnInit {
  title: string = "";
  demoTitle: string = "";
  componentName: string = "";
  showMenu = true;
  device: string;
  demos: DemoItem[];
  demoRoot: boolean = true;
  mdpath: string = environment.markdownPath + "intro.md";

  constructor(
    private route: ActivatedRoute,
    private demoService: DemoService,
    private screen: ScreenService
  ) {
    this.title = "Testing";
  }

  ngOnInit() {
    this.setDemoMenu();
    this.setDemoTitle();
    this.subscribeScreen();
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
      let demo = params["title"];
      let item: DemoItem = this.getComponent(demo);

      if (demo != null) {
        this.demoTitle = `Demo: ${demo} - Component: ${
          item != undefined ? item.component : ""
        }`;
        this.demoRoot = false;
      } else {
        this.demoTitle = "Please select a demo";
        this.demoRoot = true;
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
