import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { NgxLibModule } from "ngx-lib";

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, NgxLibModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
