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

import { ObservableCrudComponent } from "./observable-crud/observable-crud.component";

import { MouseDomObservablesComponent } from "./mouse-dom-observables/mouse-dom-observables.component";
import { MovieRendererComponent } from "./movie-renderer/movie-renderer.component";
import { OperatorsComponent } from "./operators/operators.component";
import { FlexLayoutApiComponent } from "./flex-layout-api/flex-layout-api.component";
import { SimpleObservableComponent } from "./simple-observable/simple-observable.component";
import { ObservableStreamComponent } from "./observable-stream/observable-stream.component";

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
    SimpleObservableComponent,
    ObservableCrudComponent,
    ObservableStreamComponent,
    MouseDomObservablesComponent,
    MovieRendererComponent,
    OperatorsComponent,
    FlexLayoutApiComponent
  ],
  providers: [DemoService, MovieService, PersonService]
})
export class DemosModule {}
