import { Component, OnInit } from "@angular/core";
import { FoodService } from "./food.service";
import { FoodItem } from "./food-items";

@Component({
  selector: "app-food",
  templateUrl: "./food.component.html",
  styleUrls: ["./food.component.scss"]
})
export class FoodComponent implements OnInit {
  food: FoodItem[] | null;

  constructor(private fs: FoodService) {}

  ngOnInit() {
    this.fs.getItems().subscribe(data => {
      this.food = data;
    });
  }

  onRemove(item) {
    this.fs.delete(item);
  }
}
