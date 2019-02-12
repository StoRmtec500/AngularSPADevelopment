import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { fromEvent } from 'rxjs';
import { debounceTime, map } from 'rxjs/operators';

@Component({
	selector: 'app-debounced-search',
	templateUrl: './debounced-search.component.html',
	styleUrls: [ './debounced-search.component.scss' ]
})
export class DebouncedSearchComponent implements OnInit {
	constructor() {}

	@ViewChild('searchBoxRef') searchBoxRef: ElementRef;
	searchterm: string = '';
	debounceSearch: boolean = true;

	ngOnInit() {
		this.attachDebouncedSearch();
	}

	private attachDebouncedSearch() {
		fromEvent(this.searchBoxRef.nativeElement, 'keyup')
			.pipe(
				debounceTime(this.debounceSearch ? 1000 : 0),
				map((kEvt: KeyboardEvent) => {
					return (<HTMLInputElement>kEvt.srcElement).value;
				})
			)
			.subscribe((val) => {
				console.log('Currently your searching debounced for:', val);
			});
	}
}
