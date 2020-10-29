import { randomNumberGenerator } from "../src/randomNumberGenerator.js";

test("generates a random number 1 to 9", () => {
  expect(randomNumberGenerator()).toBeGreaterThanOrEqual(1);
  expect(randomNumberGenerator()).toBeLessThanOrEqual(9);
});
