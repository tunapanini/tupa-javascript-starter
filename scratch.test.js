import { greeting } from "./scratch";

test.each([
  ["John", "Hello, John."],
  ["Anna", "Hello, Anna."],
])("greeting(%s) returns '%s'", (name, expected) => {
  const result = greeting(name);

  expect(result).toBe(expected);
});
