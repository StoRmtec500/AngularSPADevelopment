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