import { expect } from "chai";
import { describe, it } from "mocha";
import { genererAlea } from "./genererAlea";
import sinon, { SinonMock } from "sinon";

describe('genererAlea function (fake)', () => {
  const originalRandom = Math.random;

  beforeEach(() => {
    // globalThis.localStorage = {
    //   getItem(key: string) {
    //     return 'VALUE';
    //   }
    // } as any;
    Math.random = () => 0.5;
  })

  afterEach(() => {
    // delete (globalThis as any).localStorage;
    Math.random = originalRandom;
  });

  it('should return value in uppercase', () => {
    expect(genererAlea(10, 20)).to.equals(15);
  })

})

describe('genererAlea function (mock)', () => {
  let mockMath: SinonMock;

  beforeEach(() => {
    mockMath = sinon.mock(Math)
    // globalThis.localStorage = {
    //   getItem(key: string) {
    //     return 'VALUE';
    //   }
    // } as any;
    // mockMath.expects('random').once().callsFake(() => 0.5);
    mockMath.expects('random').once().returns(0.5);
  })

  afterEach(() => {
    // delete (globalThis as any).localStorage;
    mockMath.verify();
  });

  it('should return value in uppercase', () => {
    expect(genererAlea(10, 20)).to.equals(15);
  })

})
