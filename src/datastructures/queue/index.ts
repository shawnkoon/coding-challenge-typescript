/**
 * Queue
 *
 * Create a Queue Datastructure which represents FIFO Queue.
 * With methods that are named `enqueue` & `dequeue`.
 *
 * ex)
 *
 * const queue = new Queue<number>();
 * queue.enqueue(1);   // [1]
 * queue.enqueue(2);   // [2, 1]
 * queue.dequeue();    // [2] & returns 1;
 */
export class Queue<T> {
  private items: T[];

  constructor(initialItems: T[] = []) {
    this.items = initialItems;
  }

  public getQueue = (): T[] => {
    return this.items;
  }

  public enqueue = (item: T): void => {
    this.items.unshift(item);
  }

  public dequeue = (): T | undefined => {
    return this.items.pop();
  }

  public peek = (): T | undefined => {
    const size = this.items.length;
    if (!size) {
      return undefined;
    }

    return this.items[this.items.length - 1];
  }

  public toString = (): string => {
    return this.items.toString();
  }
}
