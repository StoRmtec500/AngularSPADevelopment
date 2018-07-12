import { Component, OnInit } from '@angular/core';
import { Person } from '../persons/person';
import { PersonService } from '../persons/person.service';

@Component({
  selector: 'app-binding',
  templateUrl: './binding.component.html',
  styleUrls: ['./binding.component.css']
})
export class BindingComponent implements OnInit {

  constructor(private ps: PersonService) { }

  hide: boolean = false;   
  persons : Person[];
  selectedPerson: Person;
  latePerson : Person;
  isActive: boolean = false;
  
  ngOnInit() {   
    this.ps.getPersons().then(data=>{
      this.persons = data;
      this.selectedPerson = this.persons[0];
    })
    setTimeout(()=>{
      this.latePerson = {name: "Heidi", age: 13, gender:'female'};
    }, 4000)
  }

  toggleDisplay(){
    this.hide = !this.hide;
  }

  handleChange(p: Person){
    console.log("value received from eventbinding", p);    
  }

  logChange(val){
    console.log(val);
  }
}


