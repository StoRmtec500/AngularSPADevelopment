import { Injectable } from "@angular/core";
import { Resolve, ActivatedRouteSnapshot } from "@angular/router";

import { VouchersService } from "../voucher.service";
import { Voucher } from "../../shared";
import { Observable } from "rxjs";

@Injectable()
export class VoucherResolver implements Resolve<Voucher> {
  constructor(private vs: VouchersService) {}

  resolve(
    route: ActivatedRouteSnapshot
  ): Voucher | Observable<Voucher> | Promise<Voucher> {
    let id = +route.params["id"];
    return this.vs.getVoucher(id);
  }
}
