import { HttpClient } from "@angular/common/http";

import { Observable } from "rxjs/Observable";
import { Injectable } from "@angular/core";
import { Currency } from "./model/currency.model";

@Injectable()
export class FixerService {
  constructor(private http: HttpClient) {}

  getRates(): Observable<Currency[]> {
    return this.http
      .get<any>(
        "http://data.fixer.io/api/latest?access_key=6c36c303e33169dd7102897259fc93be"
      )
      .map(result => {
        return Object.keys(result.rates).map((key, index) => {
          return { code: key, value: result.rates[key] };
        });
      });
  }
}
