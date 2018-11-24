import { Component, OnInit } from "@angular/core";
import { Router, Route } from "@angular/router";

@Component({
  selector: "app-navbar",
  templateUrl: "./navbar.component.html",
  styleUrls: ["./navbar.component.scss"]
})
export class NavbarComponent implements OnInit {
  constructor(private router: Router) {}

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

  toggleEditor() {
    this.editorDisplayed = !this.editorDisplayed;
    if (this.editorDisplayed) {
      this.router.navigate(["", { outlets: { sidebarOutlet: "showeditor" } }]);
    } else {
      this.router.navigate(["", { outlets: { sidebarOutlet: null } }]);
    }
  }

  showUpload() {
    this.router.navigate(["", { outlets: { sidebarOutlet: "upload" } }]);
  }
}
