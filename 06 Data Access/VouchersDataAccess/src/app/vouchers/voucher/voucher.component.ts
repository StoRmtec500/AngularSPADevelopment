import { ActivatedRoute, Params, Router } from "@angular/router";
import { Component, OnInit } from "@angular/core";
import { VouchersService } from "../voucher.service";
import { Voucher, VoucherDetail, BalanceAccount } from "../../shared/index";
import { Guid } from "guid-typescript";
import { compareObjects } from "../../shared/utils";

@Component({
  selector: "app-voucher",
  templateUrl: "./voucher.component.html",
  styleUrls: ["./voucher.component.scss"]
})
export class VoucherComponent implements OnInit {
  voucher: Voucher;
  // voucher: Voucher = {
  //   ID: 0,
  //   Text: "",
  //   Date: new Date().toString(),
  //   Amount: 0,
  //   Paid: false,
  //   Expense: false,
  //   Remark: false
  // };
  accounts: BalanceAccount[];
  currentDetail: VoucherDetail;

  constructor(
    private vs: VouchersService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    this.route.data.subscribe(data => (this.voucher = data["voucher"]));
    this.route.data.subscribe(data => (this.accounts = data["accounts"]));
    this.setDetail(this.voucher);
    this.router.navigate(["", { outlets: { sidebarOutlet: "upload" } }]);
  }

  findAcct(id: number){        
    
    let result: string = "";

    if(this.accounts!=null){
      result = this.accounts.find(a => a.ID == id).Name;
    }
    return result;
  }

  setDetail(v: Voucher) {
    if (v.Details != null) {
      this.currentDetail = v.Details[0];
    }
  }

  saveVoucher() {
    if (this.voucher.ID == 0) {
      this.vs.insertVoucher(this.voucher);
    } else {
      this.vs.updateVoucher(this.voucher);
    }
    this.router.navigate(["/vouchers/"]);
  }

  selectDetail(detail) {
    this.currentDetail = detail;
  }

  saveDetail(vd: VoucherDetail) {
    if (vd.ID != 0) {
      vd.Account = this.accounts.find(a => a.ID == vd.AccountID);
    } else {
      if (this.voucher.Details == null) {
        this.voucher.Details = new Array<VoucherDetail>();
      }
      this.voucher.Details.push(vd);
    }
  }

  addDetail() {
    this.currentDetail = <VoucherDetail>{
      ID: 0,
      VoucherID: this.voucher.ID,      
      Account: null,
      Text: "",
      Comment: ""
    };    
  }

  deleteDetail(vd : VoucherDetail){
    const idx = this.voucher.Details.indexOf(vd);
    this.voucher.Details.splice(idx, 1);
  }
}
