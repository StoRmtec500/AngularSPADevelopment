import { Component, OnInit } from "@angular/core";
import { Voucher } from "..";
import { DataStoreService } from "../data-store/data-store-service";
import { List } from "linqts";

@Component({
  selector: "app-kpi-bar",
  templateUrl: "./kpi-bar.component.html",
  styleUrls: ["./kpi-bar.component.scss"]
})
export class KpiBarComponent implements OnInit {
  log: boolean = false;
  expense: number = 0;
  income: number = 0;
  vouchers: Voucher[];

  constructor(private dataStore: DataStoreService) {}

  ngOnInit() {
    this.dataStore.Vouchers.subscribe((vouchers: Voucher[]) => {
      const vs = new List<Voucher>(vouchers);
      this.expense = vs.Where(v => v.Expense).Sum(v => v.Amount);
      this.income = vs.Where(v => v.Expense == false).Sum(v => v.Amount);
    });
  }
}
