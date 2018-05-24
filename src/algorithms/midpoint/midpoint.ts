// App
import { LinkedList, NodeType } from 'datastructures/linked-list';

/**
 * Midepoint of the Linked List.
 *
 * Create function that takes in a LinkedList and spits out a `middle node` of the list.
 *
 * If list consist of even number of `node`s then print last element of first half list.
 *
 * You are `NOT` allowed to use any counter variable or retrieve size of the list.
 *
 * And only iterate the list one time.
 *
 * ex)
 *
 * const list = new LinkedList();
 *
 * list.insertLast('a');
 * list.insertLast('b');
 * list.insertLast('c');
 *
 * getMidPoint(list); // returns { data: 'b', next: {...} }
 *
 * list.insertLast('d');
 *
 * getMidPoint(list); // returns { data: 'b', next: {...} }
 */
export const getMidPoint = (list: LinkedList): NodeType => {
  let slowCur: NodeType = list.getFirst();
  let fastCur: NodeType = list.getFirst();

  if (!fastCur) {
    return undefined;
  }

  while (fastCur.next && fastCur.next.next) {
    slowCur = slowCur!.next;
    fastCur = fastCur.next.next;
  }

  return slowCur;
};
