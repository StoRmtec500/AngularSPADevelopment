import { Component, OnInit } from "@angular/core";
import { PersonService } from "../persons/person.service";
import { Person } from "../persons/person";

@Component({
  selector: "app-parent-child",
  templateUrl: "./parent-child.component.html",
  styleUrls: ["./parent-child.component.css"]
})
export class ParentChildComponent implements OnInit {
  constructor(private ps: PersonService) {}

  persons: Person[];
  current: Person;

  ngOnInit() {
    this.ps.getPersons().subscribe(data => {
      this.persons = data;
    });
  }

  onPersonSelected(p: Person) {
    this.current = p;
  }

  onPersonSaved(p: Person) {
    console.log("saving to service:", p);
  }
}
