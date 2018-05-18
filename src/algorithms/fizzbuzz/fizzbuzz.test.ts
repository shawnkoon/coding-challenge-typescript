// Lib
import { expect } from 'chai';

// App
import { fizzBuzz } from './fizzbuzz';

describe('Fizz Buzz', () => {
  const fizz: string = 'fizz';
  const buzz: string = 'buzz';
  const both: string = 'fizzbuzz';
  const prime: number = 17;

  describe('initial soluiton', () => {
    it(`should return ${fizz} if 9 is passed in`, () => {
      expect(fizzBuzz(9)).to.equal(fizz);
    });
    it(`should return ${buzz} if 25 is passed in`, () => {
      expect(fizzBuzz(25)).to.equal(buzz);
    });
    it(`should return ${both} if (25*9) is passed in`, () => {
      expect(fizzBuzz(25 * 9)).to.equal(both);
    });
    it(`should return ${prime} if ${prime} is passed in`, () => {
      expect(fizzBuzz(prime)).to.equal(`${prime}`);
    });
  });
});
