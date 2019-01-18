import { Injectable } from "@angular/core";
import { Person } from "./person";
import { Observable, from, observable } from "rxjs";

@Injectable()
export class PersonService {
  constructor() {}

  getPersons(): Observable<Person[]> {
    let data = [
      {
        name: "Alexander",
        age: 47,
        gender: "male",
        married: true,
        imgUrl: "/assets/images/alex.jpg"
      },
      { name: "Brunhilde", age: 27, gender: "female", married: false },
      { name: "Susi", age: 37, gender: "female", married: false }
    ];
    return Observable.create(observer => {
      observer.next(data);
    });
  }
}
