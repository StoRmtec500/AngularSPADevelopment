import { Component, OnInit } from "@angular/core";
import { Person } from "../person";
import { PersonService } from "../person.service";

@Component({
  selector: "app-flex-layout",
  templateUrl: "./flex-layout.component.html",
  styleUrls: ["./flex-layout.component.css"]
})
export class FlexLayoutComponent implements OnInit {
  persons: Person[];
  current: Person = <Person>{id: 0, name: "", age: 0, gender:'female', email: ''};

  constructor(private ps: PersonService) {}

  ngOnInit(): void {
    this.ps.getPersons().then(data => {
      this.persons = data;
      this.current = this.persons[0];
    });
  }
}
