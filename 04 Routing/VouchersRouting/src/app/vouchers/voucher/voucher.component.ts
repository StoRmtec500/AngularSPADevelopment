import { ActivatedRoute, Params, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { VouchersService } from '../voucher.service';
import { Voucher, VoucherDetail } from '../../shared/index';
import { BalanceAccount } from 'app/shared/model/model';

@Component({
  selector: 'app-voucher',
  templateUrl: './voucher.component.html',
  styleUrls: ['./voucher.component.css']
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

  id: number;
  readonly: true;
  fragments: string;

  constructor(private vs: VouchersService, private route: ActivatedRoute) { 
    
  }

  ngOnInit() {
    this.readRoutes();
    //this.readRoutesObs();    
    //this.readResolverObs();
    //this.useResolver();
  }

  readRoutes(){
    this.vs.getVoucher(this.route.snapshot.params['id']).then(data => {
      this.voucher = data;
      this.setDetail(this.voucher);
    });

    //Accessing Query Params
    this.readonly = this.route.snapshot.queryParams['readonly'];
    console.log(`Page is readonly: ${this.readonly}` )

    //Accessing Fragments
    this.fragments = this.route.snapshot.fragment;
    if(this.fragments!=undefined) {
      console.log(`Section to navigate to: ${this.fragments}` )
    }
  }

  setDetail(v: Voucher){
    if (v.Details != null)
      {
        this.currentDetail = v.Details[0];
      }
  }

  readRoutesObs(){
    this.route.params.subscribe(params =>{
      this.id = params['id'];
      this.vs.getVoucher(this.id).then(data => {
        this.voucher = data;
        this.setDetail(this.voucher);
      });
  })

  this.route.queryParams.subscribe(qps=>{
    this.readonly = qps['readonly'];
    console.log(`Page is readonly: ${this.readonly}` )
    })  

  this.route.fragment.subscribe(fg=>console.log(fg))  
  }

  useResolver(){
    this.voucher = this.route.snapshot.data['voucher'];
    this.setDetail(this.voucher);
  }

  readResolverObs(){
    this.route.data.subscribe(data => this.voucher = data['voucher']);
    this.setDetail(this.voucher);
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
