import { it } from 'mocha';
import { convertToNumber } from './convertToNumber';
import { expect } from 'chai';

it('should throw', () => {
  expect(() => convertToNumber('ABC')).to.throw(`Erreur : "ABC" n'est pas un nombre`);
});
