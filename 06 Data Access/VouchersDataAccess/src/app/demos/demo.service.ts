import { HttpClient } from "@angular/common/http";
import { DemoItem } from "./demoItem";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable()
export class DemoService {
  constructor(private httpClient: HttpClient) {}

  getItems(): Observable<DemoItem[]> {
    return this.httpClient.get<DemoItem[]>("/assets/demos.json");
  }
}
