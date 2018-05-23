/**
 * LinkedList
 *
 * Create LinkedList data structure.
 *
 * follow `./directions.html` documenations.
 */

// App
import { Node } from './Node';

export type NodeType = Node | undefined;

export type ForEachFunctionType = (node: Node, index?: number) => any;

export class LinkedList {
  public head: NodeType;

  public constructor() {
    this.head = undefined;
  }

  public insertFirst(data: any): void {
    const newHead: Node = new Node(data, this.head);
    this.head = newHead;
  }

  public size(): number {
    let size = 0;
    let cur: NodeType = this.head;

    while (cur) {
      size++;
      cur = cur.next;
    }

    return size;
  }

  public getFirst(): NodeType {
    return this.head;
  }

  public getLast(): NodeType {
    let cur: NodeType = this.head;

    while (cur && cur.next) {
      cur = cur.next;
    }

    return cur;
  }

  public clear(): void {
    this.head = undefined;
  }

  public removeFirst(): void {
    if (this.head) {
      this.head = this.head.next;
    }
  }

  public removeLast(): void {
    let prev: NodeType = this.head;
    let cur: NodeType = prev;

    while (cur && cur.next) {
      prev = cur;
      cur = cur.next;
    }

    if (cur === prev) {
      this.head = undefined;
    } else {
      prev!.next = undefined;
    }
  }

  public insertLast(data: any): void {
    const newNode: Node = new Node(data);
    let cur: NodeType = this.head;

    while (cur && cur.next) {
      cur = cur.next;
    }

    if (cur === undefined) {
      this.head = newNode;
    } else {
      cur.next = newNode;
    }
  }

  public getAt(index: number): NodeType {
    let cur: NodeType = this.head;
    let counter: number = 0;

    if (!cur || index < 0) {
      return undefined;
    }

    while (cur) {
      if (counter === index) {
        return cur;
      }
      counter++;
      cur = cur.next;
    }

    return undefined;
  }

  public removeAt(index: number): void {
    let prev: NodeType = this.head;
    let cur: NodeType = prev;
    let counter: number = 0;

    if (!cur || index < 0) {
      return;
    }

    if (index === 0) {
      this.head = cur.next;
      return;
    }

    while (cur) {
      if (counter === index) {
        prev!.next = cur.next;
        return;
      }
      counter++;
      prev = cur;
      cur = cur.next;
    }
  }

  public insertAt(data: any, index: number): void {
    const newNode: Node = new Node(data);
    let counter: number = 0;
    let prev: NodeType = this.head;
    let cur: NodeType = prev;

    if (!cur) {
      if (index < 0) {
        return;
      }
      this.head = newNode;
      return;
    }

    if (index === 0) {
      newNode.next = cur;
      this.head = newNode;
      return;
    }

    while (cur) {
      if (counter === index) {
        newNode.next = cur;
        prev!.next = newNode;
        return;
      }
      counter++;
      prev = cur;
      cur = cur.next;
    }

    prev!.next = newNode;
  }

  public forEach(callback: ForEachFunctionType): void {
    let cur: NodeType = this.head;
    let counter: number = 0;

    while (cur) {
      callback(cur, counter);
      counter++;
      cur = cur.next;
    }
  }

  // Generator function
  public *[Symbol.iterator](): IterableIterator<any> {
    let cur: NodeType = this.head;

    while (cur) {
      yield cur;
      cur = cur.next;
    }
  }
}
