import { HttpClient, HttpHeaders } from "@angular/common/http";
import { HttpResponse } from "@angular/common/http/src/response";
import { Component, OnInit } from "@angular/core";
import { Http } from "@angular/http";
import { Voucher } from "../../shared/index";

import { map } from "rxjs/operators";
import { environment } from "../../../environments/environment";

@Component({
  selector: "app-http-clients",
  templateUrl: "./http-clients.component.html",
  styleUrls: ["./http-clients.component.css"]
})
export class HttpClientsComponent implements OnInit {
  result: any;
  fname: string;

  constructor(private httpClient: HttpClient, private http: Http) {}

  ngOnInit() {}

  getVouchers() {
    this.fname = "getVouchers()";

    this.httpClient
      .get<Voucher[]>(`${environment.apiUrl}api/vouchers`)
      .subscribe(data => {
        this.result = data;
      });
  }

  getVouchersHttp() {
    this.fname = "getVouchersHttp()";

    this.http
      .get(`${environment.apiUrl}api/vouchers`)
      .pipe(map(response => response.json()))
      .subscribe(data => {
        this.result = data;
      });
  }

  insertVoucher() {
    this.fname = "insertVoucher()";

    var voucher = { Text: "Inserted by Angular HttpClient", Date: new Date() };
    this.httpClient
      .post(`${environment.apiUrl}api/vouchers`, voucher)
      .subscribe(data => {
        this.result = "Insert using HttpClient";
      });
  }

  observeResponse() {
    this.fname = "observeResponse()";

    this.httpClient
      .get(`${environment.apiUrl}api/vouchers`, {
        observe: "response"
      })
      .subscribe((response: HttpResponse<any>) => {
        console.log('Response using {observe: "response"}: ', response);
        this.result = response;
        let data = response.body;
      });
  }

  usingHeadersHttpClient() {
    this.fname = "usingHeadersHttpClient()";

    var h = new HttpHeaders({
      "Content-Type": "application/json",
      UserEmail: "alexander.pajer@integrations.at",
      SomeHeader: "SomeVal"
    });

    h.set("abc", "def");

    this.httpClient
      .get(`${environment.apiUrl}api/vouchers`, { headers: h })
      .subscribe(data => {
        console.log("Response using headers variable: ", data);
        this.result = data;
      });
  }

  usingInterceptor() {
    this.fname = "usingInterceptor()";

    this.httpClient
      .get<Voucher[]>(`${environment.apiUrl}api/vouchers`)
      .subscribe(data => {
        this.result = data;
      });
  }
}
