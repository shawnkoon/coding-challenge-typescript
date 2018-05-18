// Lib
import { expect } from 'chai';

// App
import { isAnagram, isAnagramQuick } from './anagram';

describe('Anagram', () => {
  const str1: string = 'aa bb cc';
  const str2: string = 'ab bcac';

  const str3: string = 'Rail safety';
  const str4: string = 'fairy tales';

  const str5: string = 'hh ii jj';
  const str6: string = 'hh ik jj';

  it(`should return true for '${str1}' and '${str2}'.`, () => {
    expect(isAnagram(str1, str2)).to.equal(true);
    expect(isAnagramQuick(str1, str2)).to.equal(true);
  });

  it(`should return true for '${str3}' and '${str4}'.`, () => {
    expect(isAnagram(str3, str4)).to.equal(true);
    expect(isAnagramQuick(str3, str4)).to.equal(true);
  });

  it(`should return false for '${str5}' and '${str6}'.`, () => {
    expect(isAnagram(str5, str6)).to.equal(false);
    expect(isAnagramQuick(str5, str6)).to.equal(false);
  });
});
