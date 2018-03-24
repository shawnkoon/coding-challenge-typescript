// Lib
import { expect } from 'chai';

// App
import { reverse, reverseInES6 } from '../reverse-string';

describe('reverse-string.ts', () => {

  describe('Testing string reverse function', () => {
    it(`should reverse 'abc' to 'cba'`, () => {
      expect(reverse('abc')).to.be.equal('cba');
    });

    it(`should reverse 'Hello World' to 'dlroW olloeH'`, () => {
      expect(reverse('Hello World')).to.be.equal('dlroW olleH');
    });

    it(`should reverse 'Racecar' to 'racecaR'`, () => {
      expect(reverse('Racecar')).to.be.equal('racecaR');
    });

    it(`should reverse 'cat' to 'tac'`, () => {
      expect(reverse('cat')).to.be.equal('tac');
    });
  });

  describe('Testing string reverse function using es6 reduce()', () => {
    it(`should reverse 'abc' to 'cba'`, () => {
      expect(reverseInES6('abc')).to.be.equal('cba');
    });

    it(`should reverse 'Hello World' to 'dlroW olloeH'`, () => {
      expect(reverseInES6('Hello World')).to.be.equal('dlroW olleH');
    });

    it(`should reverse 'Racecar' to 'racecaR'`, () => {
      expect(reverseInES6('Racecar')).to.be.equal('racecaR');
    });

    it(`should reverse 'cat' to 'tac'`, () => {
      expect(reverseInES6('cat')).to.be.equal('tac');
    });
  });
});
