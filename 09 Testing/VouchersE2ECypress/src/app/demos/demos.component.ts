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
  mdpath: string | null;

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

  showDemo(goTo) {
    let current = this.router.url.substring(
      this.router.url.lastIndexOf("/") + 1
    );

    if (goTo == current) {
      this.setMetadata();
    } else {
      this.router.navigate(["/demos", goTo]);
    }
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
            this.mdpath = null;
          } else {
            let part = evt.url.substring(evt.url.lastIndexOf("/") + 1);
            this.currentItem = this.getDemoItem(part);
            if (
              this.currentItem != null &&
              (this.currentItem.markdown != undefined ||
                this.currentItem.markdown != null)
            ) {
              this.mdpath = `${environment.markdownPath}${
                this.currentItem.markdown
              }.md`;
            } else {
              this.mdpath = null;
            }
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
