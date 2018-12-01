# Angular Elements

Eleven steps to success:

1. Create Project: `ng new nge-skills`

2. Add Elements: `ng add @angular/elements --project=nge-skills`

3. Add document-register-element: `npm i document-register-element@1.8.1`

4. Create your Component: `ng g c skills-list -v Native`

5. Add it to AppComponent & Implement your Custom Element

6. Delete AppComponent

7. Modify App Module:

```typescript
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

8. Install `npm install --save-dev concat fs-extra`

9. Add elements-build.js to root folder

```javascript
const fs = require("fs-extra");
const concat = require("concat");

(async function build() {
  const files = [
    "./dist/nge-skills/runtime.js",
    "./dist/nge-skills/polyfills.js",
    "./dist/nge-skills/scripts.js",
    "./dist/nge-skills/main.js"
  ];

  await fs.ensureDir("elements");
  await concat(files, "elements/nge-skills.js");
  await fs.copyFile("./dist/nge-skills/styles.css", "elements/styles.css");
})();
```

10. Add custom build script to npm scripts:

```
"build:elements": "ng build --prod --output-hashing none && node elements-build.js"
```

11 Run `build:elements` and test `/elementtest/index.html` using [Live Server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer):

\*.html:

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <title>Angular Elements</title>
    <base href="/" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
  </head>
  <body>
    <div>Your custom Element:</div>
    <ngx-skills id="ngskills" title="Learning Angular @ETC rocks"></ngx-skills>
    <script type="text/javascript" src="/elements/nge-skills.js"></script>
    <script type="text/javascript" src="/elementstest/index.js"></script>
  </body>
</html>
```

\*.js

```javascript
document.addEventListener("DOMContentLoaded", function(event) {
  var el = document.querySelector("#ngskills");
  el.addEventListener("onSaveSkills", data =>
    console.log("Logging Save from host", data.detail)
  );
});
```

## Readings

[Getting Started with Angular Elements](https://www.telerik.com/blogs/getting-started-with-angular-elements)
