// Lib
import { expect } from 'chai';

// App
import { reverse, reverseFunction, reverseInES6 } from './reverse-string';

describe('reverse-string', () => {

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

  describe('Testing string reverse function using array reverse(), join()', () => {
    it(`should reverse 'abc' to 'cba'`, () => {
      expect(reverseFunction('abc')).to.be.equal('cba');
    });

    it(`should reverse 'Hello World' to 'dlroW olloeH'`, () => {
      expect(reverseFunction('Hello World')).to.be.equal('dlroW olleH');
    });

    it(`should reverse 'Racecar' to 'racecaR'`, () => {
      expect(reverseFunction('Racecar')).to.be.equal('racecaR');
    });

    it(`should reverse 'cat' to 'tac'`, () => {
      expect(reverseFunction('cat')).to.be.equal('tac');
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
