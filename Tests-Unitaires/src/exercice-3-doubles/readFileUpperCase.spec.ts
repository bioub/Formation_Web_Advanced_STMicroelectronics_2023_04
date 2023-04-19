import chai, { expect } from "chai";
import { describe, it } from "mocha";
import sinon, { SinonFakeTimers } from "sinon";
import fs from "node:fs/promises";
import sinonChai from "sinon-chai";
import { readFileUpperCase } from "./readFileUpperCase";

chai.use(sinonChai);

describe('readFileUpperCase function', () => {
  const fsMock = sinon.mock(fs)

  beforeEach(() => {
    fsMock.expects('readFile').once().resolves('sample text');
  })

  afterEach(() => {
    fsMock.verify();
  });

  it('should resolve my-value', async () => {
    const value = await readFileUpperCase('unexisting-file.txt');

    expect(value).to.equals(`SAMPLE TEXT`);
  })

})
