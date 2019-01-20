import { Component, OnInit } from "@angular/core";
import { Voucher } from "../../shared";
import { MatTableDataSource } from "@angular/material";
import { StatefulVoucherService } from "./stateful-voucher.service";

@Component({
  selector: "app-stateful",
  templateUrl: "./stateful.component.html",
  styleUrls: ["./stateful.component.scss"],
  providers: [StatefulVoucherService]
})
export class StatefulComponent implements OnInit {
  vouchers: Voucher[];
  dataSource: MatTableDataSource<Voucher>;
  displayedColumns = ["ID", "Text", "Date", "Amount"];

  constructor(private vs: StatefulVoucherService) {}

  ngOnInit() {
    this.vs.getAllVouchers().subscribe(data => {
      this.dataSource = new MatTableDataSource(data);
    });
  }

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
    this.dataSource.filter = filterValue;
  }

  editItem(row) {
    console.log("Edit Row", row);
  }
}
