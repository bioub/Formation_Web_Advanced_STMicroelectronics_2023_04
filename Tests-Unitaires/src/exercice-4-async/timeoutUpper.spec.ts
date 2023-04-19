import chai, { expect } from "chai";
import { describe, it } from "mocha";
import { timeoutUpper } from "./timeoutUpper";
import sinon, { SinonFakeTimers } from "sinon";
import sinonChai from "sinon-chai";

chai.use(sinonChai);

describe('timeoutUpper function', () => {
  let fakeTimers: SinonFakeTimers;

  beforeEach(() => {
    fakeTimers = sinon.useFakeTimers();
  })

  afterEach(() => {
    fakeTimers.restore();
  });

  it('should return value in uppercase', () => {
    const spy = sinon.spy();

    timeoutUpper('my-value', spy);
    fakeTimers.tick(1000);

    expect(spy).to.have.been.calledOnceWithExactly('MY-VALUE')
  })

})
