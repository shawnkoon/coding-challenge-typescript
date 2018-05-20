// Lib
import { expect } from 'chai';

// App
import { Queue } from 'datastructures/queue';
import { weaveQueues } from './weave';

describe('Weave Queue', () => {
  const queueOne = new Queue<number>();
  const queueTwo = new Queue<number>();
  let queueThree = new Queue<number>();

  before(() => {
    queueOne.enqueue(1);
    queueOne.enqueue(2);
    queueOne.enqueue(3);

    queueTwo.enqueue(4);
    queueTwo.enqueue(5);
    queueTwo.enqueue(6);
    queueTwo.enqueue(7);

    queueThree = new Queue<number>([7, 6, 3, 5, 2, 4, 1]);
  });

  it(`Combining ${queueOne} and ${queueTwo} should be ${queueThree}`, () => {
    expect(weaveQueues(queueOne, queueTwo).toString()).to.equal(queueThree.toString());
  });
});
