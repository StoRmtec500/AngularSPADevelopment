import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "rating"
})
export class RatingPipe implements PipeTransform {
  transform(value: number, args?: any): any {
    let result: string = "";
    switch (true) {
      case value <= 0:
        throw new Error("Invalid param");
      case value == 1:
        result = "na oiada";
        break;
      case value == 2:
        result = "na ja";
        break;
      case value == 3:
        result = "geht so";
        break;
      case value == 4:
        result = "leiwand";
        break;
      case value == 5:
        result = "oiada!";
        break;
      default:
        result = "expensive";
        break;
    }
    return result;
  }
}
