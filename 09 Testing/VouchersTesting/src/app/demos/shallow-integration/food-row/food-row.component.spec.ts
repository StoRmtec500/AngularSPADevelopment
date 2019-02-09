import { FoodRowComponent } from "./food-row.component";
import { ComponentFixture, TestBed } from "@angular/core/testing";
import { NO_ERRORS_SCHEMA } from "@angular/core";
import { RatingPipe } from "../../pipe/rating.pipe";

describe("Food Row Integration Test", () => {
  let testModule = {
    declarations: [FoodRowComponent, RatingPipe],
    schemas: [NO_ERRORS_SCHEMA]
  };

  let fixture: ComponentFixture<FoodRowComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule(testModule);
    fixture = TestBed.createComponent(FoodRowComponent);
  });

  it("should have the correct food item", () => {
    fixture.componentInstance.food = { name: "Pad Thai", rating: 5 };
    expect(fixture.componentInstance.food.name).toEqual("Pad Thai");
  });
});
