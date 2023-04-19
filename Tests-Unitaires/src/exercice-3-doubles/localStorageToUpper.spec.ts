import { expect } from "chai";
import { describe, it } from "mocha";
import { localStorageToUpper } from "./localStorageToUpper";

describe('localStorageToUpper function', () => {
  beforeEach(() => {
    globalThis.localStorage = {
      getItem(key: string) {
        return 'VALUE';
      }
    } as any;
  })

  afterEach(() => {
    delete (globalThis as any).localStorage;
  });

  it('should return value in uppercase', () => {
    expect(localStorageToUpper('my-key')).to.equals('VALUE');
  })

})
