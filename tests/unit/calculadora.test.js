const calc = require("../../models/calculadora");

test("Test sum function to sum 2 + 2", () => {
  const result = calc.sum(2, 2);

  expect(result).toBe(4);
});
