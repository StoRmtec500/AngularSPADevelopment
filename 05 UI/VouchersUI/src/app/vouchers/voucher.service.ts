
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Voucher } from "../shared/index";

@Injectable()
export class VouchersService {
    
    constructor(private http: HttpClient) { }

    url = '/assets/vouchers.json';
    
    getVouchers() : Promise<any> {
        return this.http.get(this.url).toPromise();          
    }
    
    getVoucher(id: number) : Promise<any> {
        return new Promise<Voucher>((resolve, reject)=>{
            this.http.get(this.url).toPromise()
            .then((data: Voucher[])=>{
                var v = data.filter((item)=>{
                    return item.ID == id;
                 })
                 resolve(v[0]);
            })
            .catch(err=>reject(err));
        })
    }
}