import { expect } from "chai";
import { it } from "mocha";
import { convertArrayToUpper } from "./convertArrayToUpper";

it('should return array in uppercase', () => {
  expect(convertArrayToUpper(['a', 'b'])).to.deep.equals(['A', 'B'])
})
