// App
import { Queue } from 'datastructures/queue';

/**
 * Weave Queue
 *
 * Create a function that takes in Two Queues, creates one new Queue.
 * Items of new Queue should include both queue items but in `alternating order`.
 * Function should be able to handle different size Queues without inserting
 * undefined into the new Queue.
 *
 * # Do not use array functions instead, only use these three methods provided by
 * the Queue. `enqueue`, `dequeue`, and `peek`.
 *
 * const a = new Queue<number>();
 *
 * a.enqueue(1);
 * a.enqueue(2);
 * a.enqueue(3);
 *
 * const b = new Queue<number>();
 *
 * b.enqueue(4);
 * b.enqueue(5);
 * b.enqueue(6);
 * b.enqueue(7);
 *
 * weaveQueue(a, b); -> new Queue<number>(); // [7,6,3,5,2,4,1];
 */

export const weaveQueues = (queueOne: Queue<any>, queueTwo: Queue<any>): Queue<any> => {
  const newQueue = new Queue<any>();
  do {
    if (queueOne.peek() !== undefined) {
      newQueue.enqueue(queueOne.dequeue());
    }
    if (queueTwo.peek() !== undefined) {
      newQueue.enqueue(queueTwo.dequeue());
    }
  } while (queueOne.peek() !== undefined || queueTwo.peek() !== undefined);

  return newQueue;
};
