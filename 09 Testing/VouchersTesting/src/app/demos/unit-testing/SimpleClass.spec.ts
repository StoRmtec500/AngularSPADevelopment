import { SimpleClass } from "./SimpleClass";

describe("Hello world", function() {
  it("contains 12 charactes", function() {
    expect(SimpleClass.sayHelloWorld().length).toEqual(12);
  });
  it("says hello world", function() {
    expect(SimpleClass.sayHelloWorld()).toEqual("Hello world!");
  });
});
