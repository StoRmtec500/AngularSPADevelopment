import { Component, OnInit, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';
import { VoucherDetail, BalanceAccount } from '../../../shared/index';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-voucher-detail',
  templateUrl: './voucher-detail.component.html',
  styleUrls: ['./voucher-detail.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class VoucherDetailComponent implements OnInit {
  
  //detail changed to get / set - otherwise change is not propagated
  private _detail: VoucherDetail;  
  get detail(): VoucherDetail{return this._detail};

  @Input() set detail (item: VoucherDetail){
      this._detail = item;      
      this.initForm();
      console.log("changed item from parent: ", item);
  };

  @Input() accounts: BalanceAccount[];
  @Output() detailSaved : EventEmitter<VoucherDetail> = new EventEmitter();

  vdForm: FormGroup;
  
  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    console.log("received accounts: ", this.accounts);
    this.initForm();
  }

  initForm(): any {
    this.vdForm = this.fb.group({
      Text: [this.detail.Text],
      AccountID: [this.detail.AccountID],
      Comment: [this.detail.Comment],
      Amount: [this.detail.Amount]
    });
  }

  saveDetail(vd: VoucherDetail){
    this.detailSaved.emit(vd);
  }

}
