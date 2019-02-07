import { Injectable } from "@angular/core";
import { FoodItem } from "./food-items";
import { HttpClient } from "@angular/common/http";
import { BehaviorSubject, Observable } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class FoodService {
  constructor(private httpClient: HttpClient) {
    this.httpClient.get<FoodItem[]>("/assets/food.json").subscribe(data => {
      this.items = data;
      this.Items.next(this.items);
    });
  }

  private items: FoodItem[] = [];
  private Items: BehaviorSubject<FoodItem[]> = new BehaviorSubject(this.items);

  getItems(): Observable<FoodItem[]> {
    return this.Items;
  }

  delete(item: FoodItem) {
    this.items = this.items.filter(f => f != item);
    this.Items.next(this.items);
  }
}
