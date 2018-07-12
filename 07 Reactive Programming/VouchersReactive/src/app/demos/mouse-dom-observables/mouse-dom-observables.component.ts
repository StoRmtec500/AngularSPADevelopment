import { Component, OnInit } from "@angular/core";
import { Observable, Subscription, fromEvent } from "rxjs";
import { Movie } from "../movie";
import { MovieService } from "../movie.service";

@Component({
  selector: "app-mouse-dom-observables",
  templateUrl: "./mouse-dom-observables.component.html",
  styleUrls: ["./mouse-dom-observables.component.scss"]
})
export class MouseDomObservablesComponent implements OnInit {
  media: Observable<Movie[]>;
  playing: Observable<Movie[]>;
  upcoming: Observable<Movie[]>;

  mouseSubs: Subscription;
  buttonClickSubs: Subscription;

  result: any;

  constructor(private ms: MovieService) {}

  ngOnInit() {}

  useMouse() {
    let pad = document.querySelector(".signPad");
    let mouse = fromEvent(pad, "mousemove");

    this.mouseSubs = mouse
      .map((evt: MouseEvent) => {
        return { X: evt.clientX, Y: evt.clientY };
      })
      .subscribe(point => {
        console.log("Mouse Moved @: ", point);
      });
  }

  unsubscribeMouseEvt() {
    this.mouseSubs.unsubscribe();
    console.log("unsubscribed from Mouse Event");
  }

  handleClick() {
    let buttonClick = Observable.fromEvent(
      document.getElementById("mybutton"),
      "click"
    );
    this.buttonClickSubs = buttonClick.subscribe(evt =>
      console.log("Button Clicked")
    );
  }

  // Just to show you -> OOB available from
  // https://github.com/Reactive-Extensions/RxJS-DOM/tree/master/doc/operators
  watchLocation(): Promise<Position> {
    return new Promise((resolve, reject) => {
      navigator.geolocation.watchPosition(
        position => {
          resolve(position);
        },
        () => {
          reject("We could not get your location");
        }
      );
    });
  }

  useWatchLocation() {
    let obsLocation = Observable.fromPromise(this.watchLocation());
    obsLocation.subscribe(data => console.log(data));
  }
}
