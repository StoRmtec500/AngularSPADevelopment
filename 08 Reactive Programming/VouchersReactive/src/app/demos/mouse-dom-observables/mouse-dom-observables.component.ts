import { Component, OnInit, ViewChild, ElementRef, OnDestroy } from '@angular/core';
import { Observable, Subscription, fromEvent, pipe, from } from 'rxjs';
import { map } from 'rxjs/operators';
import { Movie } from '../movie';
import { MovieService } from '../movie.service';

@Component({
	selector: 'app-mouse-dom-observables',
	templateUrl: './mouse-dom-observables.component.html',
	styleUrls: [ './mouse-dom-observables.component.scss' ]
})
export class MouseDomObservablesComponent implements OnInit, OnDestroy {
	@ViewChild('inputRef') inputRef: ElementRef;

	media: Observable<Movie[]>;
	playing: Observable<Movie[]>;
	upcoming: Observable<Movie[]>;

	mouseSubs: Subscription;

	result: { X: number; Y: number } = { X: 0, Y: 0 };

	constructor(private ms: MovieService) {}

	ngOnInit() {
		this.attachInputDOMEvt();
	}

	ngOnDestroy() {
		// this.mouseSubs.unsubscribe();
	}

	useMouse() {
		let pad = document.querySelector('.signPad');
		let mouse = fromEvent(pad, 'mousemove').pipe(
			map((evt: MouseEvent) => {
				return { X: evt.clientX, Y: evt.clientY };
			})
		);

		var drawpad = <HTMLCanvasElement>document.querySelector('.signPad');

		this.mouseSubs = mouse.subscribe((point) => {
			this.result = point;
			console.log('Mouse Moved @: ', point);
			// If you like take this demo as a starte to implement your own signature pad
			// that you all know from delivery services
			// http://www.williammalone.com/articles/create-html5-canvas-javascript-drawing-app/
		});
	}

	unsubscribeMouseEvt() {
		this.mouseSubs.unsubscribe();
		console.log('unsubscribed from Mouse Event');
	}

	attachInputDOMEvt() {
		fromEvent(this.inputRef.nativeElement, 'keyup').subscribe((val) => {
			console.log('Val received from Evt:', val);
		});
	}
}
