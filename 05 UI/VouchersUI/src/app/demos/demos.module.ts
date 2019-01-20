import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { RouterModule } from "@angular/router";
import { DragDropModule } from "@angular/cdk/drag-drop";
import { ScrollingModule } from "@angular/cdk/scrolling";

import { NgxChartsModule } from "@swimlane/ngx-charts";

import { MaterialModule } from "../material.module";
import { SharedModule } from "../shared/shared.module";
import { CSSBindingComponent } from "./cssbinding/binding.component";
import { DemoService } from "./demo.service";
import { DemosComponent } from "./demos.component";
import { FlexLayoutComponent } from "./flex-layout/flex-layout.component";
import { FlexMediaQueryComponent } from "./flex-media-query/flex-media-query.component";
import { FlexboxComponent } from "./flexbox/flexbox.component";
import { MaterialDialogComponent } from "./material-dialog/material-dialog.component";
import { MaterialTableComponent } from "./material-table/material-table.component";
import { MovieService } from "./movie.service";
import { PersonService } from "./person.service";
import { UsingBootstrapComponent } from "./using-bootstrap/using-bootstrap.component";
import { UsingMaterialComponent } from "./using-material/using-material.component";
import { ChartingComponent } from "./charting/charting.component";
import { VirtualScrollComponent } from "./virtual-scroll/virtual-scroll.component";
import { DragDropComponent } from "./drag-drop/drag-drop.component";
import { CalculatorComponent } from "./material-dialog/calculator/calculator.component";
import { CurrencyService } from "./material-dialog/calculator/currency.service";
import { GoogleFontsComponent } from './google-fonts/google-fonts.component';

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
    DragDropModule,
    ScrollingModule,
    NgxChartsModule
  ],
  declarations: [
    DemosComponent,
    FlexLayoutComponent,
    UsingBootstrapComponent,
    CSSBindingComponent,
    UsingMaterialComponent,
    MaterialTableComponent,
    MaterialDialogComponent,
    ChartingComponent,
    FlexboxComponent,
    FlexMediaQueryComponent,
    DragDropComponent,
    VirtualScrollComponent,
    CalculatorComponent,
    GoogleFontsComponent
  ],
  entryComponents: [MaterialDialogComponent, CalculatorComponent],
  providers: [DemoService, MovieService, PersonService, CurrencyService]
})
export class DemosModule {}
