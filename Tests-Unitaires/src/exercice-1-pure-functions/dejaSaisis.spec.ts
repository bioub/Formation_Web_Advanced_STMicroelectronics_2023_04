import { expect } from "chai";
import { afterEach, beforeEach, describe, it } from "mocha";
import { dejaSaisis } from "./dejaSaisis";

describe('dejaSaisis function', () => {
  beforeEach(() => {});
  afterEach(() => {});

  it('should returns "Vous avez déjà saisi : 1 | 2 | 3"', () => {
    expect(dejaSaisis([1, 2, 3])).to.equals('Vous avez déjà saisi : 1 | 2 | 3');
  })

  it('should returns undefined', () => {
    expect(dejaSaisis([])).to.be.undefined;
  })
})
