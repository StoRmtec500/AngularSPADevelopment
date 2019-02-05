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
import { UnitTestingComponent } from "./unit-testing/unit-testing.component";
import { MarkdownModule, MarkedOptions, MarkedRenderer } from "ngx-markdown";
import { HttpClient } from "@angular/common/http";
import { SimpleMessageComponent } from './simple-message/simple-message.component';

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
  declarations: [DemosComponent, UnitTestingComponent, SimpleMessageComponent],
  providers: [DemoService, MovieService, PersonService]
})
export class DemosModule {}
