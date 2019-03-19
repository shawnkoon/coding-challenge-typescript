// Lib
import { expect } from 'chai';

// App
import { getFibonacci, getFibonacciMemoized } from './fibonacci';

describe('Fibonacci', () => {
  const n1 = 3;
  const ans1 = 2;

  const n2 = 5;
  const ans2 = 5;

  const n3 = 9;
  const ans3 = 34;

  const n4 = 30;
  const ans4 = 832040;

  describe('Regular', () => {
    it(`should return ${ans1} on ${n1}-rd fibonacci number`, () => {
      expect(getFibonacci(n1)).to.equal(ans1);
    });

    it(`should return ${ans2} on ${n2}-th fibonacci number`, () => {
      expect(getFibonacci(n2)).to.equal(ans2);
    });

    it(`should return ${ans3} on ${n3}-th fibonacci number`, () => {
      expect(getFibonacci(n3)).to.equal(ans3);
    });

    it(`should return ${ans4} on ${n4}-th fibonacci number`, () => {
      expect(getFibonacci(n4)).to.equal(ans4);
    });
  });

  describe('Memoized', () => {
    it(`should return ${ans1} on ${n1}-rd fibonacci number`, () => {
      expect(getFibonacciMemoized(n1)).to.equal(ans1);
    });

    it(`should return ${ans2} on ${n2}-th fibonacci number`, () => {
      expect(getFibonacciMemoized(n2)).to.equal(ans2);
    });

    it(`should return ${ans3} on ${n3}-th fibonacci number`, () => {
      expect(getFibonacciMemoized(n3)).to.equal(ans3);
    });

    it(`should return ${ans4} on ${n4}-th fibonacci number`, () => {
      expect(getFibonacciMemoized(n4)).to.equal(ans4);
    });
  });

});
