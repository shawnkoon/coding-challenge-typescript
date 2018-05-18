// Lib
import { expect } from 'chai';

// App
import { Queue } from './index';

describe('Queue', () => {
  let queue: Queue<number>;

  beforeEach(() => {
    queue = new Queue<number>();
  });

  it('should be able to enqueue(1)', () => {
    queue.enqueue(1);
    expect(queue.getQueue()).to.deep.equal([1]);
  });

  it('should be able to enqueue two items', () => {
    queue.enqueue(2);
    queue.enqueue(3);
    expect(queue.getQueue()).to.deep.equal([3, 2]);
  });

  it('should be able to dequeue an item', () => {
    queue.enqueue(4);
    expect(queue.dequeue()).to.equal(4);
    expect(queue.getQueue(), 'should now be empty.').to.deep.equal([]);
  });
});
