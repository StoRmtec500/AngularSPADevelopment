import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { VouchersService } from '../voucher.service';
import { Voucher } from '../../shared';

@Injectable()
export class VoucherResolver implements Resolve<Voucher> {

  constructor(private vs: VouchersService) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Voucher | Observable<Voucher> | Promise<Voucher> {
    
    let id = +route.params['id'];
    return this.vs.getVoucher(id);
  } 

}