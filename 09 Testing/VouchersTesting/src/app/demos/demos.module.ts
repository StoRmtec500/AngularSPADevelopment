import { CommonModule } from "@angular/common";
import { HttpClient } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { RouterModule, Routes } from "@angular/router";
import { NgxChartsModule } from "@swimlane/ngx-charts";
import { MarkdownModule, MarkedOptions, MarkedRenderer } from "ngx-markdown";
import { MaterialModule } from "../material.module";
import { SharedModule } from "../shared/shared.module";
import { CompInteractionComponent } from "./comp-interaction/comp-interaction.component";
import { DeepIntegrationComponent } from "./deep-integration/deep-integration.component";
import { DemoService } from "./demo.service";
import { DemosComponent } from "./demos.component";
import { IntroE2eComponent } from "./intro-e2e/intro-e2e.component";
import { MovieService } from "./movie.service";
import { PersonService } from "./person.service";
import { ShallowIntegrationComponent } from "./shallow-integration/shallow-integration.component";
import { TestPipeComponent } from "./test-pipe/test-pipe.component";
import { UnitTestingComponent } from "./unit-testing/unit-testing.component";
import { AmountRatingPipe } from "./test-pipe/amount-rating.pipe";
import { SimpleServiceComponent } from "./simple-service/simple-service.component";
import { FoodComponent } from "./simple-comp/food.component";
import { BrowserModule } from "@angular/platform-browser";

export function markedOptions(): MarkedOptions {
  const renderer = new MarkedRenderer();

  renderer.blockquote = (text: string) => {
    return '<blockquote class="blockquote"><p>' + text + "</p></blockquote>";
  };

  return {
    renderer: renderer,
    gfm: true,
    tables: true,
    breaks: false,
    pedantic: false,
    sanitize: false,
    smartLists: true,
    smartypants: false
  };
}

const demoRoutes: Routes = [
  {
    path: "",
    component: DemosComponent,
    children: [
      { path: "unittesting", component: UnitTestingComponent },
      { path: "testpipe", component: TestPipeComponent },
      { path: "simpleservice", component: SimpleServiceComponent },
      { path: "simplecomp", component: FoodComponent },
      { path: "compinteract", component: CompInteractionComponent },
      { path: "shallowint", component: ShallowIntegrationComponent },
      { path: "deepint", component: DeepIntegrationComponent },
      { path: "introe2e", component: IntroE2eComponent }
    ]
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    SharedModule,
    RouterModule.forChild(demoRoutes),
    MaterialModule,
    NgxChartsModule,
    MarkdownModule.forRoot({
      loader: HttpClient
    })
  ],
  declarations: [
    DemosComponent,
    UnitTestingComponent,
    TestPipeComponent,
    SimpleServiceComponent,
    FoodComponent,
    CompInteractionComponent,
    ShallowIntegrationComponent,
    DeepIntegrationComponent,
    IntroE2eComponent,
    AmountRatingPipe
  ],
  providers: [DemoService, MovieService, PersonService]
})
export class DemosModule {}
