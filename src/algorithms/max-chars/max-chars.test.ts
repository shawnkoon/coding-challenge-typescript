// Lib
import { expect } from 'chai';

// App
import { maxChar, maxCharMap } from './max-chars';

describe('max-chars', () => {
  const str1: string = "abccccdde";
  const char1: string = "c";

  const str2: string = "I am here 111211";
  const char2: string = "1";

  describe('Initial solution for loops', () => {
    it(`should return '${char1}' for '${str1}'`, () => {
      expect(maxChar(str1)).to.equal(char1);
    });
    it(`should return '${char2}' for '${str2}'`, () => {
      expect(maxChar(str2)).to.equal(char2);
    });
  });

  describe('Solution using Map', () => {
    it(`should return '${char1}' for '${str1}'`, () => {
      expect(maxCharMap(str1)).to.equal(char1);
    });
    it(`should return '${char2}' for '${str2}'`, () => {
      expect(maxCharMap(str2)).to.equal(char2);
    });
  });
});
