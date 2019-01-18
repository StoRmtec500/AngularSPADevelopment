import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-using-material",
  templateUrl: "./using-material.component.html",
  styleUrls: ["./using-material.component.scss"]
})
export class UsingMaterialComponent implements OnInit {
  card = "/assets/images/CleoSoi.jpg";
  count = 3;
  public images = ["giraffe", "monkey", "elefant"];

  constructor() {}

  ngOnInit() {}

  incrementCt() {
    this.count = this.count + 1;
  }
}
