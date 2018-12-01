import { Component, OnInit } from '@angular/core';
import { Person, WorkLifeBalance } from '../person';


@Component({
  selector: 'app-template-driven',
  templateUrl: './template-driven.component.html',
  styleUrls: ['./template-driven.component.css']
})
export class TemplateDrivenComponent implements OnInit {

  person : Person = <Person> {name: "Heinz", gender: "male", age: 12, email: "derschoeneheinz@xyz.at", wealth: "poor", state: WorkLifeBalance.Happy}; //Cast required because nullable prop
  wealth = ['poor', 'rich', 'middle class'];
  states : string [] = Object.keys(WorkLifeBalance).slice(Object.keys(WorkLifeBalance).length / 2); //Gets Enum values as string array

  constructor() { }

  ngOnInit() {
  }

  savePerson(formValues){
    console.log('saving person with values: ');
    console.log(formValues);
  }
}
