import { Component, OnInit } from "@angular/core";
import {
  FormBuilder,
  FormGroup,
  Validators,
  ValidationErrors
} from "@angular/forms";
import { MatSnackBar, MatSnackBarConfig } from "@angular/material";
import { ActivatedRoute, Router } from "@angular/router";

import { BalanceAccount, Voucher, VoucherDetail } from "../../shared";
import { VouchersService } from "../voucher.service";
import { VoucherValidator } from "../voucher.validator";

@Component({
  selector: "app-voucher",
  templateUrl: "./voucher.component.html",
  styleUrls: ["./voucher.component.scss"]
})
export class VoucherComponent implements OnInit {
  constructor(
    private vs: VouchersService,
    private route: ActivatedRoute,
    private router: Router,
    private fb: FormBuilder,
    private snackBar: MatSnackBar
  ) {}

  voucher: Voucher;
  accounts: BalanceAccount[];
  currentDetail: VoucherDetail;

  voucherForm: FormGroup;

  ngOnInit() {
    this.initData();
    this.initForm();
    this.router.navigate(["", { outlets: { sidebarOutlet: "upload" } }]);
  }

  private initData() {
    this.route.data.subscribe(data => (this.voucher = data["voucher"]));
    this.route.data.subscribe(data => (this.accounts = data["accounts"]));
    this.setDetails(this.voucher);
  }

  initForm(): any {
    this.voucherForm = this.fb.group({
      Text: [this.voucher.Text, [Validators.required, Validators.minLength(2)]],
      Expense: [this.voucher.Expense],
      Date: [this.voucher.Date],
      Paid: [this.voucher.Paid],
      Amount: [this.voucher.Amount, [Validators.min(0)]]
    });
  }

  //Vouchers

  saveVoucher() {
    let vvs = this.voucherForm.value;
    let vts = Object.assign({}, this.voucher, vvs);

    if (VoucherValidator.validate(vts)) {
      if (this.voucher.ID == 0) {
        this.vs.insertVoucher(vts);
      } else {
        this.vs.updateVoucher(vts);
      }
      this.snackBar.open("Voucher Saved", "Save", {
        duration: 2000
      });
    } else {
      let config = new MatSnackBarConfig();
      config.duration = 2000;
      this.snackBar.open("Validation Error", "Save", config);
    }
  }

  violatesMinLenght() {
    let result = false;
    let errs: ValidationErrors = this.voucherForm.controls.Text.errors;

    if (errs != null) {
      console.log("Errors in Name field: ", errs);
      if (errs["minlength"]) {
        result = true;
      }
    }
    return result;
  }

  //Details

  setDetails(v: Voucher) {
    if (v.Details != null) {
      v.Details.forEach((d: VoucherDetail) => {
        d.Account = this.accounts.find(a => a.ID == d.AccountID);
      });
      this.currentDetail = v.Details[0];
    } else {
      this.voucher.Details = new Array<VoucherDetail>();
    }
  }

  selectDetail(detail) {
    this.currentDetail = detail;
  }

  saveDetail(vd: VoucherDetail) {
    vd.Account = this.accounts.find(a => a.ID == vd.AccountID);
    let modified = Object.assign({}, this.currentDetail, vd);

    if (this.currentDetail.ID != 0) {
      this.voucher.Details.splice(
        this.voucher.Details.indexOf(this.currentDetail),
        1,
        modified
      );
    } else {
      this.voucher.Details.push(modified);
    }
    this.selectDetail(modified);
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

  deleteDetail(vd: VoucherDetail) {
    this.voucher.Details.splice(this.voucher.Details.indexOf(vd), 1);
  }
}
