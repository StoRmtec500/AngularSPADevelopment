import { Component, OnInit } from "@angular/core";
import { NavigationEnd, Router } from "@angular/router";
import { environment } from "src/environments/environment";
import { ScreenService } from "../shared/screen/screen.service";
import { DemoService } from "./demo.service";
import { DemoItem } from "./demoItem";

@Component({
  selector: "app-demos",
  templateUrl: "./demos.component.html",
  styleUrls: ["./demos.component.scss"],
  providers: [DemoService]
})
export class DemosComponent implements OnInit {
  title: string = "";
  showMenu = true;
  device: string;
  demos: DemoItem[] = [];
  currentItem: DemoItem;
  mdpath: string;

  constructor(
    private router: Router,
    private demoService: DemoService,
    private screen: ScreenService
  ) {
    this.title = "Testing";
  }

  ngOnInit() {
    this.setDemoMenu();
    this.setMetadata();
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

  private setMetadata() {
    this.router.events.subscribe(evt => {
      if (evt instanceof NavigationEnd) {
        {
          if (evt.url == "/") {
            this.currentItem = null;
            this.mdpath = `${environment.markdownPath}${"intro.md"}`;
          } else {
            this.currentItem = this.getDemoItem(evt.url.substring(1));
            // this.mdpath = `${environment.markdownPath}${
            //   this.currentItem.markdown
            // }.md`;
          }
        }
      }
    });
  }

  getDemoItem(url: string): DemoItem {
    if (this.demos.length > 0) {
      return this.demos.find(el => {
        return el.url.toLowerCase() === url.toLowerCase();
      });
    }
  }
}
