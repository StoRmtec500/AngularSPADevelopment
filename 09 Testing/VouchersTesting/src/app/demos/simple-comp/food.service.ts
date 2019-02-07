import { Injectable } from "@angular/core";
import { FoodItem } from "./food-items";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class FoodService {
  constructor(private httpClient: HttpClient) {
    this.httpClient
      .get<FoodItem[]>("/assets/food.json")
      .subscribe(data => this.items);
  }

  items: FoodItem[];

  getItems(): FoodItem[] {
    return this.items;
  }
}
