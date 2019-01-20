import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { DataStoreService } from "../shared/data-store/data-store-service";
import { VOUCHER_ADD } from "../shared/event-bus/action.types";
import { EventBusService } from "../shared/event-bus/event-bus.service";
import { Voucher } from "../shared/model/model";
import { IconAdd } from "../shared/table/cmd.type";

@Component({
  selector: "app-vouchers-list",
  templateUrl: "./vouchers-list.component.html",
  styleUrls: ["./vouchers-list.component.scss"]
})
export class VouchersListComponent implements OnInit {
  vouchers: Voucher[];

  constructor(
    private router: Router,
    private ds: DataStoreService,
    private ebus: EventBusService
  ) {}

  ngOnInit() {
    this.initVouchers();
    this.ebus.setCmds([
      { title: "Add Voucher", action: VOUCHER_ADD, icon: IconAdd }
    ]);
    this.ebus.Panel.subscribe(this.evalAction);
    this.router.navigate(["", { outlets: { sidebarOutlet: null } }]);
  }

  initVouchers() {
    this.ds.getAllVouchers().subscribe(data => (this.vouchers = data));
  }

  evalAction(action: string) {}

  showVoucher(id: number) {
    this.router.navigate(["/vouchers/" + id]);
  }

  deleteVoucher(id: number) {
    this.ds.deleteVoucher(id);
  }
}
