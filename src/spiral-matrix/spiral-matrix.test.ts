// Lib
import { expect } from 'chai';

// App
import { createSpiralMatrix } from './spiral-matrix';

describe('Spiral Matrix', () => {
  const n1 = 2;
  const ans1 = [[1, 2], [4, 3]];

  const n2 = 3;
  const ans2 = [[1, 2, 3], [8, 9, 4], [7, 6, 5]];

  const n3 = 4;
  const ans3 = [
    [1, 2, 3, 4],
    [12, 13, 14, 5],
    [11, 16, 15, 6],
    [10, 9, 8, 7],
  ];

  const n4 = 5;
  const ans4 = [
    [1, 2, 3, 4, 5],
    [16, 17, 18, 19, 6],
    [15, 24, 25, 20, 7],
    [14, 23, 22, 21, 8],
    [13, 12, 11, 10, 9],
  ];

  it(`should match ${ans1} when N = ${n1}`, () => {
    expect(createSpiralMatrix(n1)).to.deep.equal(ans1);
  });

  it(`should match ${ans2} when N = ${n2}`, () => {
    expect(createSpiralMatrix(n2)).to.deep.equal(ans2);
  });

  it(`should match ${ans3} when N = ${n3}`, () => {
    expect(createSpiralMatrix(n3)).to.deep.equal(ans3);
  });

  it(`shoudl match ${ans4} when N = ${n4}`, () => {
    expect(createSpiralMatrix(n4)).to.deep.equal(ans4);
  });
});
