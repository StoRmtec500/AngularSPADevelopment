import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { RouterModule } from "@angular/router";
import { NgxChartsModule } from "@swimlane/ngx-charts";

import { MaterialModule } from "../material.module";
import { SharedModule } from "../shared/shared.module";
import { DemoService } from "./demo.service";
import { DemosComponent } from "./demos.component";
import { MovieService } from "./movie.service";
import { PersonService } from "./person.service";

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    SharedModule,
    MaterialModule,
    NgxChartsModule
  ],
  declarations: [DemosComponent],
  providers: [DemoService, MovieService, PersonService]
})
export class DemosModule {}
