### Simple Unit Test using a Class

Run `ng test` and switch to Component folder `\demos\unit-testing`

Investigate `SimpleClass.ts` and `SimpleClass.spec.ts`

Notice the First Test:

```typescript
it("contains 12 charactes", function() {
  expect(SimpleClass.sayHelloWorld().length).toEqual(12);
});
```

Run the Test using `ng test`
