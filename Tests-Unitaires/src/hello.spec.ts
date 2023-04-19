import { it } from 'mocha';
import { expect } from 'chai';
import hello from './hello';

// it('should return Hello Romain', () => {
//   const msg = hello('Romain');

//   if (msg !== 'Hello Romain !') {
//     throw new Error('hello returns ' + msg + ', instead of Hello Romain')
//   }
// });

// Style TDD
// it('should return Hello Romain', () => {
//   assert.strictEqual(hello('Romain'), 'Hello Romain !');
// });

// Style BDD
it('should return Hello Romain', () => {
  expect(hello('Romain')).to.equals('Hello Romain');
});
