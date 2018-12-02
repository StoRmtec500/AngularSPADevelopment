import { Component, OnInit } from "@angular/core";

@Component({
  selector: "my-navbar",
  templateUrl: "./navbar.component.html",
  styleUrls: ["./navbar.component.css"]
})
export class NavbarComponent implements OnInit {
  constructor() {}

  items: string[] = ["Home", "Products", "Search"];

  ngOnInit() {}
}
