import { Injectable } from "@angular/core";
import { Person } from "./person";

@Injectable()
export class PersonService {
  constructor() {}

  getPersons(): Promise<Person[]> {
    return new Promise<Person[]>((resolve, reject) => {
      setTimeout(() => {
        resolve([
          {
            name: "Alexander",
            lastname: "Pajer",
            age: 47,
            gender: "male",
            married: true,
            imgUrl: "/assets/images/alex.jpg",
            email: "alexander.pajer@integrations.at"
          },
          { name: "Brunhilde", age: 27, gender: "female", married: false },
          { name: "Susi", age: 37, gender: "female", married: false }
        ]);
      }, 1500);
    });
  }
}
