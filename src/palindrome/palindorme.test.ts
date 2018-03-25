// Lib
import { expect } from 'chai';

// App
import { isPalindrome, isPalindromeQuick } from './palindrome';

describe('palindrome', () => {
  describe('isPalindrome - simple reverse comparison', () => {
    it('should match racecar true', () => {
      expect(isPalindrome('racecar')).to.equal(true);
    });

    it(`should not match 'race car' false`, () => {
      expect(isPalindrome('race car')).to.equal(false);
    });
  });

  describe('isPalindrome - Quick finish', () => {
    it('should match tacocat true', () => {
      expect(isPalindromeQuick('tacocat')).to.equal(true);
    });

    it('should match taco,cat false', () => {
      expect(isPalindromeQuick('taco,cat')).to.equal(false);
    });
  });
});
