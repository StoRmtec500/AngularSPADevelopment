import { Injectable } from "@angular/core";
import { MsAdalAngular6Service } from "microsoft-adal-angular6";
import { HttpClient } from "@angular/common/http";
import { eps } from "../endpoints";

@Injectable({
  providedIn: "root"
})
export class O365Service {
  constructor(
    private adalSvc: MsAdalAngular6Service,
    private httpClient: HttpClient
  ) {
    this.user = this.adalSvc.userInfo;
  }

  user: any;

  logIn() {
    this.adalSvc.login();
  }

  logOut() {
    this.adalSvc.logout();
  }

  query(endpoint: any, query: string, callback) {
    this.adalSvc.acquireToken("graphApiUri").subscribe((token: string) => {
      console.log("Aquired Ressource Token:", token);
      let opts = {
        headers: {
          Authorization: `Bearer ${token}`,
          Accept: "application/json"
        }
      };
      this.httpClient
        .get(`${endpoint}${query}`, opts)
        .subscribe(data => callback(data));
    });
  }

  createEvent(item, cal) {
    this.adalSvc.acquireToken("graphApiUri").subscribe((token: string) => {
      console.log("Aquired Ressource Token:", token);
      let opts = {
        headers: {
          Authorization: `Bearer ${token}`,
          Accept: "application/json"
        }
      };
      this.httpClient
        .post(`${eps.graphApiUri}${cal}`, opts)
        .subscribe(data => console.log(data));
    });
  }
}
