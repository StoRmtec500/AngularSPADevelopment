import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-alert',
  template: `
  <h1 (click)="alert()">{{type}}</h1>
`,
  styleUrls: ['./alert.component.css']
})
export class AlertComponent {

  @Input() type: string = "success";
  
  alert() {
    console.log("alert");
  }

}
