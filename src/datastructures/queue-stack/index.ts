// App
import { Stack } from '../stack';

/**
 * Queue from Stacks.
 *
 * Implement Queue with `enqueue`, `dequeue`, and `peek`. Using Two Stacks.
 *
 * const queue = new Queue<number>();
 * queue.enqueue(1);   // [1]
 * queue.enqueue(2);   // [2, 1]
 * queue.dequeue();    // [2] & returns 1;
 */

export class Queue<T> {
  private stackOne: Stack<T>;
  private stackTwo: Stack<T>;

  constructor() {
    this.stackOne = new Stack<T>();
    this.stackTwo = new Stack<T>();
  }

  public enqueue = (newItem: T): void => {
    while (this.stackTwo.peek()) {
      this.stackOne.push(this.stackTwo.pop()!);
    }

    this.stackOne.push(newItem);
  }

  public dequeue = (): T | undefined => {
    while (this.stackOne.peek()) {
      this.stackTwo.push(this.stackOne.pop()!);
    }

    return this.stackTwo.pop();
  }

  public peek = (): T | undefined => {
    while (this.stackOne.peek()) {
      this.stackTwo.push(this.stackOne.pop()!);
    }

    return this.stackTwo.peek();
  }
}
