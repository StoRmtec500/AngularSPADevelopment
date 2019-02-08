import { Component, OnInit } from "@angular/core";
import { FoodItem } from "../model/food-items";
import { FoodService } from "../foodService/food.service";

@Component({
  selector: "app-shallow-integration",
  templateUrl: "./shallow-integration.component.html",
  styleUrls: ["./shallow-integration.component.scss"]
})
export class ShallowIntegrationComponent implements OnInit {
  food: FoodItem[] | null;

  constructor(private fs: FoodService) {}

  ngOnInit() {
    this.fs.getItems().subscribe(data => {
      this.food = data;
    });
  }

  deleteFood(food: FoodItem) {
    this.food = this.food.filter(i => i != food);
    this.fs.deleteItem(food).subscribe();
  }
}
