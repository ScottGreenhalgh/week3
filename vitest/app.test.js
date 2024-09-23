import { test, expect } from "vitest";

import { sum } from "./app.js";

test("add function adds two numbers", function () {
  const result = sum(1, 2);
  const expected = 3;
  expect(result).toBe(expected);
});
