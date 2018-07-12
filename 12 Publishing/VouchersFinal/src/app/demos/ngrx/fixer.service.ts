import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core';
import { Currency } from './model/currency.model';

@Injectable()
export class FixerService {
    constructor(private http: HttpClient) {}

    getRates(): Observable<Currency[]> {
        return this.http.get<any>('https://api.fixer.io/latest?base=EUR').map(result => {
            return Object.keys(result.rates).map((key, index) => {
                return { code: key, value: result.rates[key] };
            });
        });
    }
}