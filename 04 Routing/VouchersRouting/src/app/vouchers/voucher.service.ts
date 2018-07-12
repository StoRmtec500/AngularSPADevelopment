
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Voucher } from "../shared/index";
import { environment } from 'environments/environment';

@Injectable()
export class VouchersService {
    constructor(private http: HttpClient) { }

    delay : number = 0;

    vouchers = null;

    getVouchers() : Promise<any> {
        return this.http.get(environment.vouchersAPI).toPromise();          
    }
    
    getVoucher(id: number) : Promise<any> {
        return new Promise<Voucher>((resolve, reject)=>{
            setTimeout(()=>{
                this.http.get(environment.vouchersAPI).toPromise()
            .then((data: Voucher[])=>{
                var v = data.filter((item)=>{
                    return item.ID == id;
                 })
                 resolve(v[0]);
            })
            .catch(err=>reject(err));
            }, 1000 * this.delay)
        })
    }
}