import { Component, OnInit } from '@angular/core';
import { DoublerService } from './doubler.service';
import { Observable, forkJoin } from 'rxjs';

@Component({
	selector: 'app-fork-join',
	templateUrl: './fork-join.component.html',
	styleUrls: [ './fork-join.component.scss' ]
})
export class ForkJoinComponent implements OnInit {
	constructor(private ds: DoublerService) {}

	response: number[] = [];

	ngOnInit() {}

	doAction() {
		this.requestMockVM().subscribe((arr) => {
			this.response = arr;
		});
	}

	public requestMockVM(): Observable<number[]> {
		let response1 = this.ds.double(3);
		let response2 = this.ds.double(9);
		let response3 = this.ds.double(2);
		return forkJoin([ response1, response2, response3 ]);
	}
}
