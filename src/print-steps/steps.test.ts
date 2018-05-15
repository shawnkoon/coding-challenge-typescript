// Lib
import { expect } from 'chai';

// App
import { printSteps } from './steps';

describe('Print Steps', () => {
  it('should print 1 steps without error', () => {
    printSteps(1);
    expect(true).to.equal(true);
  });

  it('should print 2 steps without error', () => {
    printSteps(2);
    expect(true).to.equal(true);
  });

  it('should print 3 steps without error', () => {
    printSteps(3);
    expect(true).to.equal(true);
  });
});
