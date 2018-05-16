// Lib
import { expect } from 'chai';

// App
import { printPyramid } from './pyramid';

describe('Print Pyramid', () => {
  it('should print 1 pyramid without error', () => {
    printPyramid(1);
    expect(true).to.equal(true);
  });

  it('should print 2 pyramid without error', () => {
    printPyramid(2);
    expect(true).to.equal(true);
  });

  it('should print 3 pyramid without error', () => {
    printPyramid(3);
    expect(true).to.equal(true);
  });
});
