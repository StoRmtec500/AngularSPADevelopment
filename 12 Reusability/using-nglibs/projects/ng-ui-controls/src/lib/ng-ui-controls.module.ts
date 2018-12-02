import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { NavbarComponent } from "./navbar/navbar.component";

@NgModule({
  declarations: [NavbarComponent],
  imports: [BrowserModule, CommonModule, FormsModule],
  exports: [NavbarComponent]
})
export class NgUiControlsModule {}
