import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "rating"
})
export class AmountRatingPipe implements PipeTransform {
  transform(value: number, args?: any): any {
    let result: string = "";
    switch (true) {
      case value <= 0:
        throw new Error("Invalid param");
      case value < 100:
        result = "cheap";
        break;
      case value < 500:
        result = "medium price";
        break;
      default:
        result = "expensive";
        break;
    }
    return result;
  }
}
