import { async, ComponentFixture, TestBed } from "@angular/core/testing";
import { ShallowIntegrationComponent } from "./shallow-integration.component";
import { of } from "rxjs";
import { FoodItem } from "../model/food-items";
import { RatingPipe } from "../pipe/rating.pipe";

describe("Shallow Integration Test:", () => {
  // let comp: ShallowIntegrationComponent;
  let foodData: FoodItem[];
  let mockFS;
  foodData = [
    { name: "Pad Thai", rating: 5 },
    { name: "Butter Chicken", rating: 5 },
    { name: "Cannelloni", rating: 4 },
    { name: "Cordon Bleu", rating: 2 }
  ];

  let serviceResult = [
    { name: "Pad Thai", rating: 5 },
    { name: "Butter Chicken", rating: 5 },
    { name: "Cannelloni", rating: 4 }
  ];

  let testModule = {
    declarations: [ShallowIntegrationComponent]
  };

  let fixture: ComponentFixture<ShallowIntegrationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule(testModule);
    fixture = TestBed.createComponent(ShallowIntegrationComponent);
  });

  it("removes the item from the list", () => {
    comp.food = foodData;
    mockFS.deleteItem.and.returnValue(of(serviceResult));
    comp.deleteFood(foodData[3]);

    expect(comp.food.length).toBe(3);
  });

  it("should call deleteHero", () => {
    comp.food = foodData;
    mockFS.deleteItem.and.returnValue(of(serviceResult));

    comp.deleteFood(foodData[3]);
    expect(mockFS.deleteItem).toHaveBeenCalledWith(foodData[3]);
  });
});
