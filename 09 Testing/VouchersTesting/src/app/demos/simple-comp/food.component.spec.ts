import { FoodComponent } from "./food.component";
import { FoodItem } from "./food-items";
import { of } from "rxjs";

describe("FoodComponent - using Food Service", () => {
  let comp: FoodComponent;
  let foodData: FoodItem[];
  let mockFS;
  foodData = [
    { name: "Pad Thai", rating: 5 },
    { name: "Butter Chicken", rating: 5 },
    { name: "Cannelloni", rating: 4 },
    { name: "Cordon Bleu", rating: 2 }
  ];

  let serviceResult = foodData.splice(3, 1);

  beforeEach(() => {
    mockFS = jasmine.createSpyObj(["getItems", "deleteItem"]);
    comp = new FoodComponent(mockFS);
  });

  it("removes the item from the list"),
    () => {
      comp.food = foodData;
      mockFS.deleteItem.and.returnValue(of(foodData.splice(3, 1)));
      comp.deleteFood(foodData[3]);

      expect(comp.food.length).toBe(3);
    };

  it("should call deleteHero", () => {
    comp.food = foodData;
    // mockFS.deleteFood.and.returnValue(of(foodData.splice(3,1))

    comp.deleteFood(foodData[3]);
    expect(mockFS.deleteItem).toHaveBeenCalledWith(foodData[3]);
  });
});
