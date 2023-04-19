import chai, { expect } from "chai";
import { describe, it } from "mocha";
import { timeoutUpper } from "./timeoutUpper";
import sinon, { SinonFakeTimers } from "sinon";
import sinonChai from "sinon-chai";
import { promiseRandomTimeout } from "./promiseRandomTimeout";

chai.use(sinonChai);

describe('promiseRandomTimeout function', () => {
  let fakeTimers: SinonFakeTimers;

  beforeEach(() => {
    fakeTimers = sinon.useFakeTimers();
  })

  afterEach(() => {
    fakeTimers.restore();
  });

  it('should resolve my-value', async () => {
    const promise = promiseRandomTimeout('my-value');
    fakeTimers.tick(1000);

    const value = await promise;

    expect(value).to.equals('my-value');
  })

})
