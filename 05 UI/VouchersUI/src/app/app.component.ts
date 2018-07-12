import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { RouterEvent, NavigationEnd, Route } from "@angular/router";

@Component({
  selector: "vouchers-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent implements OnInit {
  
  children: string[];
  hideSideBarOnDemo: boolean = false;
  isDemo: boolean;

  constructor(private router: Router, private route: ActivatedRoute) {}

  ngOnInit() {
    this.evalScreen();
  }

  evalScreen() {
    if(this.hideSideBarOnDemo){
      this.children = this.router.config[0].children.map((item: Route) => {
        return item.path;
      });
      this.router.events.subscribe((evt: RouterEvent) => {
        if (evt.url != undefined) {
          let isChildRoute =
            this.children.find(item => evt.url.includes(item)) != undefined;
          this.isDemo = evt.url == "/" || isChildRoute ? true : false;
        }
      });
    }
  }

  setSideDivWidth() {
    return this.isDemo ? "flexSideHidden" : "mainBox flexSide";
  }

  setSpacer() {
    return this.isDemo ? "" : "spacer";
  }

  setMainDivWidth() {
    return this.isDemo ? "flexMainBig" : "mainBox flexMain";
  }
}
