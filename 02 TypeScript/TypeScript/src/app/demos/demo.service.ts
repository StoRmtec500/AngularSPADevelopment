import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

import { DemoItem } from "./demoItem";
import { Observable } from "rxjs";

@Injectable()
export class DemoService {
  constructor(private httpClient: HttpClient) {}

  getItems(): Observable<DemoItem[]> {
    return this.httpClient.get<DemoItem[]>("/assets/demos.json");
  }
}
