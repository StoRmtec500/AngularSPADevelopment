import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { switchMap, debounceTime } from 'rxjs/operators';
import { FoodService } from './food.service';
import { FoodItem } from './foodItem';

@Component({
	selector: 'app-switch-map',
	templateUrl: './switch-map.component.html',
	styleUrls: [ './switch-map.component.scss' ]
})
export class SwitchMapComponent implements OnInit {
	constructor(private fb: FormBuilder, private fs: FoodService) {}

	foundFood: FoodItem;
	//Most of the time you initialize with a model prop - here we want it empty
	fcFoodName = new FormControl();
	foodForm: FormGroup = this.fb.group({ fcFoodName: this.fcFoodName });

	ngOnInit() {
		this.attachSearch();
	}

	attachSearch() {
		this.fcFoodName.valueChanges
			.pipe(debounceTime(500), switchMap((name) => this.fs.getItem(name)))
			.subscribe((item) => {
				this.foundFood = item;
			});
	}
}
