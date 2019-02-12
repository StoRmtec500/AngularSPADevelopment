import { Component, OnInit } from '@angular/core';
import { FoodItem } from '../../foodItem';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { debounceTime } from 'rxjs/internal/operators/debounceTime';
import { switchMap } from 'rxjs/operators';
import { FoodService } from '../../food.service';

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
			.subscribe((item) => (this.foundFood = item));
	}
}
