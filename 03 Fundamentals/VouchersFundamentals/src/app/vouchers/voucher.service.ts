import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Voucher } from "../shared/index";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";

@Injectable({
  providedIn: "root"
})
export class VouchersService {
  constructor(private http: HttpClient) {}

  getVouchers(): Observable<Voucher[]> {
    return this.http.get<Voucher[]>("/assets/vouchers.json");
  }

  getVoucher(id: number): Observable<Voucher> {
    return this.getVouchers().pipe(
      map(v => v.find((v: Voucher) => v.ID == id))
    );
  }
}
