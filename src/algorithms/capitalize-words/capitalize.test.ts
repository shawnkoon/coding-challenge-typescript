// Lib
import { expect } from 'chai';

// App
import { capitalize } from './capitalize';

describe('Capitalization', () => {
  const str1 = 'Hello I am shawnkoon';
  const res1 = 'Hello I Am Shawnkoon';

  const str2 = 'who are you?';
  const res2 = 'Who Are You?';

  const str3 = 'oh no, i am shawn!!';
  const res3 = 'Oh No, I Am Shawn!!';

  it(`Should convert '${str1}' to '${res1}'`, () => {
    expect(capitalize(str1)).to.equal(res1);
  });

  it(`Should convert '${str2}' to '${res2}'`, () => {
    expect(capitalize(str2)).to.equal(res2);
  });

  it(`Should convert '${str3}' to '${res3}'`, () => {
    expect(capitalize(str3)).to.equal(res3);
  });
});
