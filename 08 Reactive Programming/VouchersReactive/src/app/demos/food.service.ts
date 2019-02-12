import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { FoodItem } from './foodItem';
import { map } from 'rxjs/operators';

@Injectable({
	providedIn: 'root'
})
export class FoodService {
	//Our little static service result ... just to make things easy
	foodItems: Observable<FoodItem[]> = of([
		{ name: 'Pad Thai', rating: 5 },
		{ name: 'Butter Chicken', rating: 5 },
		{ name: 'Cannelloni', rating: 4 },
		{ name: 'Cordon Bleu', rating: 2 }
	]);

	constructor() {}

	getItems(): Observable<FoodItem[]> {
		return this.foodItems;
	}

	getItem(name): Observable<FoodItem> {
		return this.foodItems.pipe(map((item) => item.find((fi: FoodItem) => fi.name == name)));
	}
}
