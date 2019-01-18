import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import {
  ActivatedRouteSnapshot,
  Resolve,
  RouterStateSnapshot
} from "@angular/router";
import { Observable } from "rxjs";
import { BalanceAccount } from "../shared";

@Injectable()
export class AccountResolver implements Resolve<BalanceAccount[]> {
  constructor(private httpClient: HttpClient) {}

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | BalanceAccount[]
    | Observable<BalanceAccount[]>
    | Promise<BalanceAccount[]> {
    return this.httpClient.get<BalanceAccount[]>("/assets/accounts.json");
  }
}
