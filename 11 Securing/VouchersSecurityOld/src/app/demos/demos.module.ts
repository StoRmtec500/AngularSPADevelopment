import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { RouterModule } from "@angular/router";
import { NgxChartsModule } from "@swimlane/ngx-charts";

import { MaterialModule } from "../material.module";
import { CalculatorComponent } from "../shared/calculator/calculator.component";
import { SharedModule } from "../shared/shared.module";
import { DemoService } from "./demo.service";
import { DemosComponent } from "./demos.component";
import { MovieService } from "./movie.service";
import { PersonService } from "./person.service";
import { JwtComponent } from './jwt/jwt.component';
import { WinAuthComponent } from './winauth/winauth.component';
import { FacebookAuthComponent } from './fbauth/fbauth.component';

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
  declarations: [
    DemosComponent,
    JwtComponent,
    WinAuthComponent,
    FacebookAuthComponent,
  ],
  providers: [DemoService, MovieService, PersonService]
})
export class DemosModule {}
