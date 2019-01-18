import { Injectable } from "@angular/core";
import {
  ActivatedRouteSnapshot,
  Resolve,
  RouterStateSnapshot
} from "@angular/router";
import { Observable } from "rxjs";
import { Voucher } from "../../shared";
import { VouchersService } from "../voucher.service";

@Injectable()
export class VoucherResolver implements Resolve<Voucher> {
  constructor(private vs: VouchersService) {}

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Voucher | Observable<Voucher> | Promise<Voucher> {
    let id = +route.params["id"];
    return this.vs.getVoucher(id);
  }
}
