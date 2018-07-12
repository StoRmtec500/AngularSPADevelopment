import { Http } from "@angular/http";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Component, OnInit } from "@angular/core";
import { Observable } from "rxjs";
import "rxjs/add/operator/map";
import "rxjs/add/operator/filter";
import { Voucher } from "../../shared/index";
import { HttpResponse } from "@angular/common/http/src/response";


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
    this.fname =  "getVouchers()";

    this.httpClient
      .get<Voucher[]>("http://localhost:5000/api/vouchers")
      .subscribe(data => {
        this.result = data;
      });
  }

  getVouchersHttp() {
    this.fname =  "getVouchersHttp()";

    this.http
      .get("http://localhost:5000/api/vouchers")
      .map(response => response.json())
      .subscribe(data => {
        this.result = data;
      });
  }

  insertVoucher() {
    this.fname =  "insertVoucher()";

    var voucher = { Text: "Inserted by Angular HttpClient", Date: new Date() };
    this.httpClient
      .post("http://localhost:5000/api/vouchers", voucher)
      .subscribe(data => {
        this.result = "Insert using HttpClient";
      });
  }

  observeResponse(){
    this.fname =  "observeResponse()";

      this.httpClient
    .get("http://localhost:5000/api/vouchers", {      
      observe: "response"
    })
    .toPromise()
    .then((response : HttpResponse<any>) => {
      console.log('Response using {observe: "response"}: ',response);
      this.result = response;
      let data = response.body;
    });
  }

  usingHeadersHttpClient() {
    this.fname =  "usingHeadersHttpClient()";

    var h = new HttpHeaders({
      'Content-Type':  'application/json',
      'UserEmail': 'alexander.pajer@integrations.at',
      'SomeHeader' : 'SomeVal'
    });
    
    h.set("abc", "def");
    
    this.httpClient
      .get("http://localhost:5000/api/vouchers", {headers: h})
      .toPromise()
      .then(data => {
        console.log('Response using headers variable: ', data);
        this.result = data;
      });
  }

  usingInterceptor(){
    this.fname =  "usingInterceptor()";

    this.httpClient
    .get<Voucher[]>("http://localhost:5000/api/vouchers")
    .subscribe(data => {
      this.result = data;
    });
  }
}
