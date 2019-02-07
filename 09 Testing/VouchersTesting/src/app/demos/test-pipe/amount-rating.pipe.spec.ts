import { AmountRatingPipe } from "./amount-rating.pipe";

// Jasmine Matches: https://jasmine.github.io/api/edge/matchers.html

// var p;

beforeEach(() => {
  //   p = new AmountRatingPipe();
});

describe("AmountRatingPipe", function() {
  it("creates an instance", function() {
    let p = new AmountRatingPipe();
    expect(p).toBeTruthy();
  });

  it("returns cheap whe 50 is passed", function() {
    let p = new AmountRatingPipe();
    expect(p.transform(50)).toEqual("cheap");
  });

  it("throws an err when a negative value is passed", function() {
    let p = new AmountRatingPipe();
    expect(() => {
      p.transform(-1);
    }).toThrowError("Invalid param");
  });
});
