// Lib
import { expect } from 'chai';
import { isEqual } from 'lodash';

// App
import { chunk, chunkWithES6, chunkWithMem } from './chunk-array';

describe('Chunk Array', () => {
  const ans1: any[][] = [[1, 2], [3, 4]];
  const ans2: any[][] = [[1, 2], [3, 4], [5]];
  const ans3: any[][] = [[1, 2, 3, 4], [5]];
  const ans4: any[][] = [[1, 2, 3, 4]];

  describe('initial soluiton', () => {
    it(`In: chunk([1,2,3,4], 2) | Out: [[1, 2], [3, 4]]`, () => {
      expect(isEqual(chunk([1, 2, 3, 4], 2), ans1)).to.equal(true);
    });
    it(`In: chunk([1,2,3,4,5], 2) | Out: [[1, 2], [3, 4], [5]]`, () => {
      expect(isEqual(chunk([1, 2, 3, 4, 5], 2), ans2)).to.equal(true);
    });
    it(`In: chunk([1,2,3,4,5], 4) | Out: [[1, 2, 3, 4], [5]]`, () => {
      expect(isEqual(chunk([1, 2, 3, 4, 5], 4), ans3)).to.equal(true);
    });
    it(`In: chunk([1,2,3,4], 5) | Out: [[1, 2, 3, 4]]`, () => {
      expect(isEqual(chunk([1, 2, 3, 4], 5), ans4)).to.equal(true);
    });
  });

  describe('Accessing array memory soluiton', () => {
    it(`In: chunk([1,2,3,4], 2) | Out: [[1, 2], [3, 4]]`, () => {
      expect(isEqual(chunkWithMem([1, 2, 3, 4], 2), ans1)).to.equal(true);
    });
    it(`In: chunk([1,2,3,4,5], 2) | Out: [[1, 2], [3, 4], [5]]`, () => {
      expect(isEqual(chunkWithMem([1, 2, 3, 4, 5], 2), ans2)).to.equal(true);
    });
    it(`In: chunk([1,2,3,4,5], 4) | Out: [[1, 2, 3, 4], [5]]`, () => {
      expect(isEqual(chunkWithMem([1, 2, 3, 4, 5], 4), ans3)).to.equal(true);
    });
    it(`In: chunk([1,2,3,4], 5) | Out: [[1, 2, 3, 4]]`, () => {
      expect(isEqual(chunkWithMem([1, 2, 3, 4], 5), ans4)).to.equal(true);
    });
  });

  describe('using ES6 method soluiton', () => {
    it(`In: chunk([1,2,3,4], 2) | Out: [[1, 2], [3, 4]]`, () => {
      expect(isEqual(chunkWithES6([1, 2, 3, 4], 2), ans1)).to.equal(true);
    });
    it(`In: chunk([1,2,3,4,5], 2) | Out: [[1, 2], [3, 4], [5]]`, () => {
      expect(isEqual(chunkWithES6([1, 2, 3, 4, 5], 2), ans2)).to.equal(true);
    });
    it(`In: chunk([1,2,3,4,5], 4) | Out: [[1, 2, 3, 4], [5]]`, () => {
      expect(isEqual(chunkWithES6([1, 2, 3, 4, 5], 4), ans3)).to.equal(true);
    });
    it(`In: chunk([1,2,3,4], 5) | Out: [[1, 2, 3, 4]]`, () => {
      expect(isEqual(chunkWithES6([1, 2, 3, 4], 5), ans4)).to.equal(true);
    });
  });
});
