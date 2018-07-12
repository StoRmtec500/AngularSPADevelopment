import { ActivatedRoute, Params, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { VouchersService } from '../voucher.service';
import { Voucher, VoucherDetail, BalanceAccount } from '../../shared/index';

@Component({
  selector: 'app-voucher',
  templateUrl: './voucher.component.html',
  styleUrls: ['./voucher.component.scss']
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

  constructor(private vs: VouchersService, private route: ActivatedRoute, private router: Router) {   }

  ngOnInit() {

    this.route.data.subscribe(data => this.voucher = data['voucher']);
    this.route.data.subscribe(data => this.accounts = data['accounts']);
    this.setDetail(this.voucher);
    this.router.navigate(['',{outlets: { sidebarOutlet : 'upload'}}])
  }

  setDetail(v: Voucher){
    if (v.Details != null)
      {
        this.currentDetail = v.Details[0];
      }
  }

  saveVoucher(){
    
  }

  selectDetail(detail){
    this.currentDetail = detail;
  }

  saveDetail(detail){
    if(this.voucher.Details.includes(detail)){
      
    }
    else{
      this.voucher.Details.push(detail)
    }
  }
}
