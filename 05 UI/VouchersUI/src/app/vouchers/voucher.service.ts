import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Voucher } from '../shared/index';
import { Observable } from 'rxjs';

@Injectable()
export class VouchersService {
	constructor(private http: HttpClient) {}

	url = '/assets/vouchers.json';

	getVouchers(): Observable<Voucher[]> {
		return this.http.get<Voucher[]>(this.url);
	}

	getVoucher(id: number): Promise<any> {
		return new Promise<Voucher>((resolve, reject) => {
			this.http
				.get(this.url)
				.toPromise()
				.then((data: Voucher[]) => {
					var v = data.filter((item) => {
						return item.ID == id;
					});
					resolve(v[0]);
				})
				.catch((err) => reject(err));
		});
	}

	deleteVoucher(id: number) {
		console.log(`deleting voucher with id "${id}"`);
	}
}
