import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { MsAdalAngular6Module } from "microsoft-adal-angular6";

import { AppComponent } from "./app.component";
import { O365Component } from "./o365/o365.component";
import { eps } from "./endpoints";

export const adalCfg = {
  tenant: "d92b247e-90e0-4469-a129-6a32866c0d0a",
  clientId: "4e60c128-a813-4031-bd99-cf4327cce885", //=> Application ID in Azure
  cacheLocation: "localStorage",
  endpoints: eps,
  returnUrl: "http://localhost:4200"
};

@NgModule({
  declarations: [AppComponent, O365Component],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    MsAdalAngular6Module.forRoot(adalCfg)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
