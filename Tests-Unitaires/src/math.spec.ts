import { it } from "mocha";
import { sqrt } from "./math";
import { expect } from "chai";

// it('should not throw an error', () => {
//   // si sqrt ne fait pas d'erreur le test passe
//   sqrt(2);
// });

// it('should throw an error', () => {
//   try {
//     sqrt(-1);
//   } catch (err) {
//     expect((err as Error).message).to.equals('nb must be positive')
//   }
// });


it('should not throw an error', () => {
  // si sqrt ne fait pas d'erreur le test passe
  expect(() => sqrt(2)).to.not.throw();
});

it('should throw an error', () => {
  expect(() => sqrt(-1)).to.throw('nb must be positive');
});
