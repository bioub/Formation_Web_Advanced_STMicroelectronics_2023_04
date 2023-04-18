import { it } from "mocha";
import { timeout } from "./timeout";
import chai, { expect } from "chai";
import { useFakeTimers, spy } from "sinon";
import sinonChai from "sinon-chai";

chai.use(sinonChai);

// le test passe alors qu'il ne devrait pas
// it('should resolve', () => {
//   timeout(1000)
//     .then(() => {
//       expect(false).to.be.true;
//     })
// });

// lui dire manuellement quand le test est terminé
// it('should resolve', (done) => {
//   timeout(1000)
//     .then(() => {
//       expect(true).to.be.true;
//       done();
//     })
// });

// si on a accès à une promesse il suffit de la retourner
// it('should resolve', () => {
//   return timeout(1000)
//     .then(() => {
//       expect(true).to.be.true;
//     })
// });

// idem en version async / await
// it('should resolve', async () => {
//   await timeout(1000);
//   expect(true).to.be.true;
// });

// globalThis.setTimeout = function(cb, delay) {
//   cb();
// }


// avec sinon on peut controller le temps
it('should resolve', async () => {
  const fakeTimers = useFakeTimers();

  const promise = timeout(1000)

  fakeTimers.tick(1000);

  await promise;
  expect(true).to.be.true;

  fakeTimers.restore();
});

it('should resolve', async () => {
  const fakeTimers = useFakeTimers();

  const callback = spy();
  setTimeout(callback, 1000);

  fakeTimers.tick(1000);

  // expect(callback.callCount).to.equals(1);
  expect(callback).to.have.been.calledOnce;

  fakeTimers.restore();
});
