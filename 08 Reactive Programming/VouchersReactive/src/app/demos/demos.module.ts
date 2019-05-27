import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { RouterModule } from "@angular/router";
import { NgxChartsModule } from "@swimlane/ngx-charts";
import { MaterialModule } from "../material.module";
import { SharedModule } from "../shared/shared.module";
import { CreatingObservableComponent } from "./creating-observables/creating-observable.component";
import { DemoService } from "./demo.service";
import { DemosComponent } from "./demos.component";
import { FlexLayoutApiComponent } from "./flex-layout-api/flex-layout-api.component";
import { MouseDomObservablesComponent } from "./mouse-dom-observables/mouse-dom-observables.component";
import { MovieRendererComponent } from "./movie-renderer/movie-renderer.component";
import { MovieService } from "./movie.service";
import { ObservableCrudComponent } from "./observable-crud/observable-crud.component";
import { ObservableStreamComponent } from "./observable-stream/observable-stream.component";
import { OperatorsComponent } from "./operators/operators.component";
import { PersonService } from "./person.service";
import { UnsubscribingComponent } from "./unsubscribing/unsubscribing.component";
import { DebouncedSearchComponent } from "./operators/debounced-search/debounced-search.component";
import { MarkdownModule } from "ngx-markdown";
import { HttpClient } from "@angular/common/http";
import { SubsinkComponent } from './subsink/subsink.component';

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
    NgxChartsModule,
    MarkdownModule.forRoot({
      loader: HttpClient
    })
  ],
  declarations: [
    DemosComponent,
    CreatingObservableComponent,
    ObservableCrudComponent,
    ObservableStreamComponent,
    MouseDomObservablesComponent,
    MovieRendererComponent,
    OperatorsComponent,
    FlexLayoutApiComponent,
    UnsubscribingComponent,
    DebouncedSearchComponent,
    SubsinkComponent
  ],
  providers: [DemoService, MovieService, PersonService]
})
export class DemosModule {}
