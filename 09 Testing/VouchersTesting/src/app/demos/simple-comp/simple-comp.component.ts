import { Component, OnInit } from "@angular/core";
import { FoodService } from "./food.service";
import { FoodItem } from "./food-items";

@Component({
  selector: "app-simple-comp",
  templateUrl: "./simple-comp.component.html",
  styleUrls: ["./simple-comp.component.scss"]
})
export class SimpleCompComponent implements OnInit {
  food: FoodItem[] | null;

  constructor(private fs: FoodService) {}

  ngOnInit() {
    this.food = this.fs.getItems();
  }
}
