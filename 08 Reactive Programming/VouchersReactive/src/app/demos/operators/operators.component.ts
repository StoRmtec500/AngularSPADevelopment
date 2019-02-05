import { Component, OnInit } from "@angular/core";
import { Subscription, throwError, interval, of } from "rxjs";
import {
  map,
  tap,
  catchError,
  finalize,
  find,
  take,
  concat
} from "rxjs/operators";
import { VouchersService } from "../../vouchers/voucher.service";
import { Voucher } from "../../shared";
import { isArray } from "util";

@Component({
  selector: "app-operators",
  templateUrl: "./operators.component.html",
  styleUrls: ["./operators.component.scss"]
})
export class OperatorsComponent implements OnInit {
  constructor(private vs: VouchersService) {}

  sub: Subscription = null;

  ngOnInit() {}

  // assignToArr = items => (this.movies = items);
  unsbscribe = () => (this.sub != null ? this.sub.unsubscribe() : null);
  setLabel = v => ({ ...v, Label: `${v.Text} costs € ${v.Amount}` });

  vouchers: Voucher[] = null;

  log = (msg: string, data: any) => {
    console.log(`executing ${msg}, 'data' is Array: ${isArray(data)}`, data);
    this.vouchers = isArray(data) ? data : [data];
  };

  useMap() {
    this.vs
      .getVouchers()
      .pipe(
        //Obs Operator map()
        map(vs => {
          //ES6 array.map()
          return vs.map(v => ({
            ...v,
            Label: `${v.Text} costs € ${v.Amount}`
          }));
        })
      )
      .subscribe(data => this.log("use map() - RxJS 5 pattern", data));
  }

  usePipeMapAndTap() {
    //RxJS 6 pattern
    // tap() is the RxJS replacement for do() to ensure ES compatibility
    this.vs
      .getVouchers()
      .pipe(
        tap(data => console.log("logged by tap(): ", data)),
        map(vs => vs.map(this.setLabel))
      )
      .subscribe(data => this.log("use pipe(), map() & tap()", data));
  }

  errHandling() {
    this.vs
      .getVouchers()
      .pipe(
        tap(data => console.log("logged by tap(): ", data)),
        map(vs => vs.map(this.setLabel)),
        catchError(err => {
          return throwError("Err happened while processing vouchers");
        }),
        finalize(() => console.log("finalizing ..."))
      )
      .subscribe(data => this.log("errHandling", data));
  }

  useFind() {
    this.vs
      .getVouchers()
      .pipe(map(v => v.find((v: Voucher) => v.ID == 3)))
      .subscribe(data => this.log("getByID - using find()", data));
  }

  useFilter() {
    this.vs
      .getVouchers()
      .pipe(map(v => v.filter((v: Voucher) => v.Paid)))
      .subscribe(data => this.log("useFilter", data));
  }

  //Compare the two outputs
  useTake() {
    this.vs
      .getVouchers()
      .pipe(take(3))
      .subscribe(data => this.log("useTake", data));

    interval(1000)
      .pipe(take(3))
      .subscribe(x => console.log(x));
  }

  useConcat() {
    const sourceOne = of(1, 2, 3);
    const sourceTwo = of(4, 5, 6);
    //emit values from sourceOne, when complete, subscribe to sourceTwo
    const concated = sourceOne.pipe(concat(sourceTwo));

    concated.subscribe(nbr => console.log(nbr));
  }

  useTakeWhile() {}

  useSwitchMap() {}
}
