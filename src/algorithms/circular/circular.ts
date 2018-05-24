// App
import { LinkedList, NodeType } from 'datastructures/linked-list';

/**
 * Circular LinkedList
 *
 * Create a function that takes in LinkedList, return `true` if list is
 * circular, `false` if it is not.
 *
 * ex)
 * const list = new LinkedList();
 * const a = new Node('a');
 * const b = new Node('b');
 * const c = new Node('c');
 *
 * list.head = a;
 * a.next = b;
 * b.next = c;
 * c.next = b;
 *
 * isCircularList(list); // returns true;
 */

export const isCircularList = (list: LinkedList): boolean => {
  let slowCur: NodeType = list.getFirst();
  let fastCur: NodeType = slowCur;

  while (fastCur && fastCur.next) {
    if (fastCur.next === slowCur) {
      return true;
    }
    slowCur = slowCur!.next;
    fastCur = fastCur.next.next;
  }

  return false;
};
