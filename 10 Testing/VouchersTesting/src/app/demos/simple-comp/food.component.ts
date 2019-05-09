import { Component, OnInit } from "@angular/core";
import { FoodService } from "../foodService/food.service";
import { FoodItem } from "../model/food-items";

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

  deleteFood(food: FoodItem) {
    this.food = this.food.filter(i => i != food);
    this.fs.deleteItem(food).subscribe();
  }
}
