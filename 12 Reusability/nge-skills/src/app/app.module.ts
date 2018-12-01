import { Injector, NgModule } from "@angular/core";
import { createCustomElement } from "@angular/elements";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { SkillsListComponent } from "./skills-list/skills-list.component";

@NgModule({
  declarations: [SkillsListComponent],
  imports: [BrowserModule, FormsModule],
  providers: [],
  entryComponents: [SkillsListComponent]
})
export class AppModule {
  constructor(private injector: Injector) {
    const elSkills = createCustomElement(SkillsListComponent, { injector });
    customElements.define("ngx-skills", elSkills);
  }

  ngDoBootstrap() {}
}
