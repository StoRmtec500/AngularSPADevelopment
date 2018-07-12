import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs/Observable";
import { RatesResponse } from "./rates";

@Injectable()
export class CurrencyService {
  url: string =
    "http://data.fixer.io/api/latest?access_key=6c36c303e33169dd7102897259fc93be";
  rates: Map<string, number>;

  constructor(private httpClient: HttpClient) {}

  getRates(): Observable<RatesResponse> {
    return this.httpClient.get<RatesResponse>(this.url);
  }
}
