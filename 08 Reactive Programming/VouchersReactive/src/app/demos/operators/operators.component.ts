import { Component, OnInit } from "@angular/core";
import { Subscription, Observable, throwError, interval } from "rxjs";
import { map, tap, catchError, finalize, find, take } from "rxjs/operators";
import { VouchersService } from "../../vouchers/voucher.service";
import { Voucher } from "../../shared";
import { isArray } from "util";

@Component({
  selector: "app-operators",
  templateUrl: "./operators.component.html",
  styleUrls: ["./operators.component.css"]
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

  getByID() {
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
}
