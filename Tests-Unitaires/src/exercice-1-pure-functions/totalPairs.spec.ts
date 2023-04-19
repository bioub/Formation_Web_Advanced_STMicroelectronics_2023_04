import { expect } from "chai";
import { it } from "mocha";
import { totalPairs } from "./totalPairs";

it('should return 2', () => {
  // Arrange
  const nbs = [1, 2, 3, 4];

  // Act
  const result = totalPairs(nbs)

  // Assert
  expect(result).to.equals(2);
})
