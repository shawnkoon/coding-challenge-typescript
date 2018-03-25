// Lib
import { expect } from 'chai';

// App
import { reverse, reverseRec, reverseShort } from './reverse-int';

describe('reverse-int', () => {
  describe('reverse with initial idea', () => {
    it('should reverse positive number 152 -> 251', () => {
      expect(reverse(152)).to.equal(251);
    });

    it('should reverse negative number -90 -> -9', () => {
      expect(reverse(-90)).to.equal(-9);
    });

    it('should reverse with 0s at the end 500 -> 5', () => {
      expect(reverse(500)).to.equal(5);
    });
  });

  describe('reverse with recursive solution idea', () => {
    it('should reverse positive number 152 -> 251', () => {
      expect(reverseRec(152)).to.equal(251);
    });

    it('should reverse negative number -90 -> -9', () => {
      expect(reverseRec(-90)).to.equal(-9);
    });

    it('should reverse with 0s at the end 500 -> 5', () => {
      expect(reverseRec(500)).to.equal(5);
    });
  });

  describe('reverse with string solution idea', () => {
    it('should reverse positive number 152 -> 251', () => {
      expect(reverseShort(152)).to.equal(251);
    });

    it('should reverse negative number -90 -> -9', () => {
      expect(reverseShort(-90)).to.equal(-9);
    });

    it('should reverse with 0s at the end 500 -> 5', () => {
      expect(reverseShort(500)).to.equal(5)});
  });
});
