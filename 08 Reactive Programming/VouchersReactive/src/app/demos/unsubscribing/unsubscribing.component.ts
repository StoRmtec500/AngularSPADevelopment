import { Component, OnInit, OnDestroy } from "@angular/core";
import { Subscription, fromEvent } from "rxjs";
import { map } from "rxjs/operators";

@Component({
  selector: "app-unsubscribing",
  templateUrl: "./unsubscribing.component.html",
  styleUrls: ["./unsubscribing.component.scss"]
})
export class UnsubscribingComponent implements OnInit, OnDestroy {
  constructor() {}

  mouse$: Subscription;
  result: { X: number; Y: number } = { X: 0, Y: 0 };

  ngOnInit() {
    this.subscribeScreen();
  }

  ngOnDestroy() {
    this.mouse$.unsubscribe();
    console.log("Mouse Subscription unsubscribed");
  }

  subscribeScreen() {
    let pad = document.querySelector(".signPad");
    let mouse = fromEvent(pad, "mousemove").pipe(
      map((evt: MouseEvent) => {
        return { X: evt.clientX, Y: evt.clientY };
      })
    );

    this.mouse$ = mouse.subscribe(point => {
      this.result = point;
      console.log("Mouse Moved @: ", point);
    });
  }

  unsubscribeMouseEvt() {
    this.mouse$.unsubscribe();
    console.log("unsubscribed from Mouse Event");
  }
}
