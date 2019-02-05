import { Component, OnInit, ViewChild, ElementRef } from "@angular/core";
import {
  Subscription,
  throwError,
  interval,
  of,
  Observable,
  fromEvent
} from "rxjs";
import {
  map,
  tap,
  catchError,
  finalize,
  take,
  concat,
  delay,
  debounceTime
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
  searchterm: string = "";
  debounceSearch: boolean = true;

  @ViewChild("searchBoxRef") searchBoxRef: ElementRef;

  ngOnInit() {
    this.attachDebouncedSearch();
  }

  // assignToArr = items => (this.movies = items);
  unsbscribe = () => (this.sub != null ? this.sub.unsubscribe() : null);
  setLabel = v => ({ ...v, Label: `${v.Text} costs € ${v.Amount}` });

  vouchers: Voucher[] = null;

  log = (msg: string, data: any) => {
    console.log(`executing: ${msg}, 'data' is Array: ${isArray(data)}`, data);
    this.vouchers = isArray(data) ? data : [data];
  };

  private attachDebouncedSearch() {
    fromEvent(this.searchBoxRef.nativeElement, "keyup")
      .pipe(
        debounceTime(1000),
        map((kEvt: KeyboardEvent) => {
          return (<HTMLInputElement>kEvt.srcElement).value;
        })
      )
      .subscribe(val => {
        console.log("Currently your searching debounced for:", val);
      });
  }

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
    this.vs
      .getVouchers()
      .pipe(
        tap(data => console.log("logged using tap() operator: ", data)),
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
  }

  useInterval() {
    interval(1000)
      .pipe(take(3))
      .subscribe(x => console.log(x));
  }

  useDelay() {
    var fakeObservable = of(["hund", "katze", "maus"]).pipe(delay(5000));
    console.log("before delay execution - waiting 5 secs");
    fakeObservable.subscribe(data => console.log(data));
  }

  useConcat() {
    const sourceOne = of(1, 2, 3);
    const sourceTwo = of(4, 5, 6);
    const concated = sourceOne.pipe(concat(sourceTwo));
    concated.subscribe(nbr => console.log(nbr));
  }

  useSwitchMap() {}

  useMergeMap() {}

  forJoin() {}

  // doSearch() {
  //   if (this.debounceSearch) {
  //   } else {
  //     console.log("Serching:", this.searchterm);
  //   }
  // }
}
