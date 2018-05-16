// Lib
import { expect } from 'chai';

// App
import { countVowels, countVowelsRegExp } from './vowels';

describe('Find Vowles', () => {
  const str1: string = 'Hello world';
  const ans1: number = 3;

  const str2: string = 'My name is Shawnkoon!';
  const ans2: number = 6;

  it(`should return ${ans1} for '${str1}'`, () => {
    expect(countVowels(str1)).to.equal(ans1);
    expect(countVowelsRegExp(str1)).to.equal(ans1);
  });

  it(`should return ${ans2} for '${str2}'`, () => {
    expect(countVowels(str2)).to.equal(ans2);
    expect(countVowelsRegExp(str2)).to.equal(ans2);
  });
});
