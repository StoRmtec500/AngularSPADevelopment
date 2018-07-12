import { ActivatedRoute, Params, Router } from "@angular/router";
import { Component, OnInit } from "@angular/core";
import { VouchersService } from "../voucher.service";
import { Voucher, VoucherDetail, BalanceAccount } from "../../shared/index";
import { compareObjects } from "../../shared/utils";
import { DataStoreService } from "../../shared/data-store/data-store-service";
import { EventBusService } from "../../shared/event-bus/event-bus.service";
import { VOUCHER_SAVE, VOUCHER_ADD_DETAIL, VOUCHER_SAVE_DETAIL, VOUCHER_SHOW_LIST } from "../../shared/event-bus/action.types";
import { IconSave, IconAdd, IconCancel } from "../../shared/table/cmd.type";

@Component({
  selector: "app-voucher",
  templateUrl: "./voucher.component.html",
  styleUrls: ["./voucher.component.scss"]
})
export class VoucherComponent implements OnInit {
  voucher: Voucher = {
    ID: 0,
    Text: "",
    Date: new Date().toString(),
    Amount: 0,
    Paid: false,
    Expense: false,
    Remark: false
  };
  accounts: BalanceAccount[];
  currentDetail: VoucherDetail;

  constructor(
    private ds: DataStoreService,
    private vs: VouchersService,
    private route: ActivatedRoute,
    private ebus: EventBusService,
    private router: Router
  ) {}

  ngOnInit() {
    let id = this.route.snapshot.params["id"];
    this.ds.getVoucherById(id).subscribe(data=>this.voucher = data)    
    this.setDetail(this.voucher);
    this.router.navigate(["", { outlets: { sidebarOutlet: "upload" } }]);
    this.ebus.Panel.subscribe((action: string ) => {
      console.log("receiving action from side panel: " + action)
      this.saveVoucher();
     });
     this.setPanelCmds();
  }

  setPanelCmds() {
    this.ebus.setCmds([
      { title: "Save Voucher", action: VOUCHER_SAVE , icon: IconSave},
      { title: "New Detail", action: VOUCHER_ADD_DETAIL , icon: IconAdd },
      { title: "Save Detail", action: VOUCHER_SAVE_DETAIL  , icon: IconSave},
      { title: "Cancel", action: VOUCHER_SHOW_LIST , icon: IconCancel}
    ]);
  }

  evalAction(action: string){
   
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
