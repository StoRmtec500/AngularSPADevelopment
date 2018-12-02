import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { NgUiControlsModule } from "ng-ui-controls";

import { AppComponent } from "./app.component";

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, NgUiControlsModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
