# Angular Elements

Steps to success:

Create Project: `ng new nge-skills`

Add Elements: `ng add @angular/elements --project=nge-skills`

Create your Component: `ng g c skills-list -v Native`

Add it to AppComponent & Implement your Custom Element

Delete AppComponent

Modify App Module:

```
@NgModule({
  declarations: [SkillsListComponent],
  imports: [BrowserModule],
  entryComponents: [SkillsListComponent]
})
export class AppModule {
  constructor(private injector: Injector) {
    const elSkills = createCustomElement(SkillsListComponent, { injector });
    customElements.define("nge-skills", elSkills);
  }

  ngDoBootstrap() {}
}
```
