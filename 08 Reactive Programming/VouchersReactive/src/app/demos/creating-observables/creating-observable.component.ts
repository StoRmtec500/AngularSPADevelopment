import { Component, OnInit } from "@angular/core";
import { Subscription, Observable, from } from "rxjs";
import { map, filter } from "rxjs/operators";
import { Voucher } from "../../shared/index";

@Component({
  selector: "app-simple-observable",
  templateUrl: "./creating-observable.component.html",
  styleUrls: ["./creating-observable.component.scss"]
})
export class CreatingObservableComponent implements OnInit {
  fName: string;
  url = "/assets/vouchers.json";
  numbers = [2, 5, 9, 12, 22];

  nbrObs: Observable<number>;
  result: Voucher[];

  nbrSubscription: Subscription;

  constructor() {}

  ngOnInit() {}

  useObsCreate() {
    this.fName = "useObservable.create()";

    this.nbrObs = Observable.create(observer => {
      let idx = 0;

      let getNumber = () => {
        observer.next(this.numbers[idx++]);

        if (idx < this.numbers.length) {
          setTimeout(getNumber, 250);
        } else {
          observer.complete();
        }
      };

      getNumber();
    });

    this.nbrObs.subscribe((data: number) =>
      console.log("useObsCreate: ", data)
    );
  }

  useObsFrom() {
    this.fName = "useObsFrom()";

    this.nbrObs = from(this.numbers);
    this.nbrObs.subscribe((data: number) => console.log("useObsFrom: ", data));

    //Same as above using chaining
    // this.nbrSubscription = Observable.from(this.numbers).subscribe((data: number) =>
    //   console.log("useObsFrom: ", data)
    // );
  }

  wrapXMLHttpRequest(): Observable<any> {
    return Observable.create(observer => {
      let xhr = new XMLHttpRequest();

      xhr.addEventListener("load", () => {
        if (xhr.status === 200) {
          let data = JSON.parse(xhr.responseText);
          observer.next(data);
          observer.complete();
        } else {
          observer.error(xhr.statusText);
        }
      });

      xhr.open("GET", this.url);
      xhr.send();
    });
  }

  wrappingCallbacks() {
    this.fName = "wrappingCallbacks()";

    let load = this.wrapXMLHttpRequest().subscribe(data => {
      console.log("wrappingCallbacks:", data);
      this.result = data;
    });
  }

  mockPromise(succeed: boolean): Promise<number[]> {
    return new Promise<number[]>((resolve, reject) => {
      setTimeout(() => {
        console.log("Async Task Complete");
        if (succeed) {
          resolve(this.numbers);
        } else {
          reject("Outcome: Promise rejected");
        }
      }, 1000);
    });
  }

  usePromiseToObs() {
    this.fName = "see console for output";
    let pObs = from(this.mockPromise(true)).subscribe(data =>
      console.log("usePromiseToObs:", data)
    );
  }

  useOperator() {
    this.fName = "useOperator()";

    this.nbrObs = Observable.create(observer => {
      let index = 0;

      let getNumber = () => {
        observer.next(this.numbers[index++]);

        if (index < this.numbers.length) {
          setTimeout(getNumber, 250);
        } else {
          observer.complete();
        }
      };

      getNumber();
    });

    this.nbrObs
      .pipe(
        filter(n => n > 6),
        map(n => n * 2)
      )
      .subscribe((data: number) => console.log("useOperator: ", data));
  }
}
