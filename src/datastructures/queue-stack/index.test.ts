// Lib
import { expect } from 'chai';

// App
import { Queue } from '../queue-stack';

describe('Queue with Stacks', () => {
  let queue: Queue<number>;

  beforeEach(() => {
    queue = new Queue<number>();
    expect(queue.peek(), 'Queue should initialy be empty.').to.equal(undefined);
  });

  it('should be able to enqueue(1)', () => {
    queue.enqueue(1);
    expect(queue.peek()).to.deep.equal(1);
  });

  it('should be able to enqueue two items', () => {
    queue.enqueue(2);
    queue.enqueue(3);
    expect(queue.dequeue()).to.equal(2);
    expect(queue.dequeue()).to.equal(3);
  });

  it('should be able to dequeue an item', () => {
    queue.enqueue(4);
    expect(queue.dequeue()).to.equal(4);
    expect(queue.dequeue(), 'should now be empty.').to.equal(undefined);
  });
});
