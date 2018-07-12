import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-side-panel',
  templateUrl: './side-panel.component.html',
  styleUrls: ['./side-panel.component.css']
})
export class SidePanelComponent implements OnInit { 

  constructor(private router: Router) { }

  ngOnInit() {
    
  }

  events = [];

  shouldRun = true;

}
