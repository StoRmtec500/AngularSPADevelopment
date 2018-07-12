import { Component, OnInit, ViewChildren, QueryList, AfterViewInit } from '@angular/core';
import { AlertComponent } from './alert/alert.component';

@Component({
  selector: 'app-view-child',
  templateUrl: './view-child.component.html',
  styleUrls: ['./view-child.component.css']
})
export class ViewChildComponent implements AfterViewInit {
  
  @ViewChildren(AlertComponent) alerts: QueryList<AlertComponent>
  
  constructor() { }

  ngAfterViewInit() {
    this.alerts.forEach(alertInstance => console.log(alertInstance));
  }

}
