# Angular Basics

[Angular CLI Reference](https://angular.io/cli)

Update Project

```autong
ng update  @angular/core @angular/cli
```

# VS Code Debug Config

launch.json

```
{
  "version": "0.2.0",
  "configurations": [
    {
      "name": "ng serve",
      "type": "chrome",
      "request": "launch",
      "url": "http://localhost:4200/",
      "webRoot": "${workspaceFolder}"
    },
    {
      "name": "ng test",
      "type": "chrome",
      "request": "launch",
      "url": "http://localhost:9876/debug.html",
      "webRoot": "${workspaceFolder}"
    },
    {
      "name": "ng e2e",
      "type": "node",
      "request": "launch",
      "program": "${workspaceFolder}/node_modules/protractor/bin/protractor",
      "protocol": "inspector",
      "args": ["${workspaceFolder}/protractor.conf.js"]
    }
  ]
}
```

## Run an Angular project on a custom port

```
ng serve --port 4300
```

## Sample angular.json setting Sass & default spec options

```
...
"defaults": {
    "styleExt": "scss",
    "class": {
      "spec": true
    },
    "component": {
      "spec": false
    },
    "directive": {
      "spec": false
    },
    "module": {
      "spec": false
    },
    "pipe": {
      "spec": false
    },
    "service": {
      "spec": true
    }
  }
```
