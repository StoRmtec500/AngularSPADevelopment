import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { BalanceAccount } from '../shared';
import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';


@Injectable()
export class AccountResolver implements Resolve<BalanceAccount[]> {

  constructor(private httpClient: HttpClient) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): BalanceAccount[] | Observable<BalanceAccount[]> | Promise<BalanceAccount[]> {
    return this.httpClient.get<BalanceAccount[]>('/assets/accounts.json')
  }  
}
