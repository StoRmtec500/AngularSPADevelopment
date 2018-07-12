import { Injectable } from "@angular/core";

import { Observable } from "rxjs/Observable";
import { BehaviorSubject } from "rxjs";
import { VouchersService } from "../../vouchers";
import { AccountsService } from "../../accounts/account.service";
import { Voucher, BalanceAccount } from "..";
import { lateVoucher } from "../late-voucher";

@Injectable()
export class DataStoreService {
  constructor(private vs: VouchersService, private as: AccountsService) {
    this.initVouchers();
    this.initAccounts();
    this.addLateVoucher();
  }

  //Vouchers
  private vouchersArray: Voucher[] = [];
  private vouchers: BehaviorSubject<Voucher[]> = new BehaviorSubject(
    this.vouchersArray
  );
  public Vouchers: Observable<Voucher[]> = this.vouchers.asObservable();

  initVouchers() {
    this.vs.getVouchers().subscribe(data => {
      this.vouchersArray = data;
      this.vouchers.next(this.vouchersArray);
    });
  }

  addLateVoucher() {
    setTimeout(() => {      
      this.vouchersArray.push(<Voucher>lateVoucher);
      this.vouchers.next(this.vouchersArray);
    }, 8000);
  }

  //Accounts
  private accountsArray: BalanceAccount[] = [];
  private accounts: BehaviorSubject<BalanceAccount[]> = new BehaviorSubject(
    this.accountsArray
  );
  public Accounts: Observable<BalanceAccount[]> = this.accounts.asObservable();

  initAccounts() {
    this.as.getAccounts().subscribe(data => {
      this.accountsArray = data;
      this.accounts.next(this.accountsArray);
    });
  }

  saveAccount(account: BalanceAccount) {
    console.log(account);
    if (account.ID == 0) {
      this.as.insertAccount(account);
    } else {
      this.as.updateAccount(account);
    }
    this.initAccounts();
  }
}