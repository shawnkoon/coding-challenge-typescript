/**
 * Stack
 *
 * Create Stack datastructure which represents first in last out model.
 * Use JavaScript Array as it's underline datastructure.
 *
 * implement three methods, `pop`, `push`, and `peek` at minimum.
 *
 * ex)
 * const x = new Stack<number>();
 * x.push(1);
 * x.push(2);
 * x.push(3);
 *
 * x.peek(); // 3
 *
 * x.pop(); // 3
 * x.pop(); // 2
 * x.pop(); // 1
 */

export class Stack<T> {
  private items: T[];

  constructor(initialItems: T[] = []) {
    this.items = initialItems;
  }

  public peek = (): T | undefined => {
    return this.items[this.items.length - 1];
  }

  public push = (item: T): void => {
    this.items.push(item);
  }

  public pop = (): T | undefined => {
    return this.items.pop();
  }

  public toString = (): string => {
    return this.items.toString();
  }
}
