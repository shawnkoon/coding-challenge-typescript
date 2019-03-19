// Lib
import { expect } from 'chai';

// App
import { LinkedList, Node } from 'datastructures/linked-list';
import { isCircularList } from './circular';

describe('midpoint LinkedList', () => {
  let list: LinkedList;

  beforeEach(() => {
    list = new LinkedList();
  });

  it('should return false on empty list', () => {
    expect(isCircularList(list)).to.equal(false);
  });

  it('should work with 1 or 2 items', () => {
    const a = new Node('a');
    list.head = a;

    expect(isCircularList(list), 'one item linear test').to.equal(false);

    const b = new Node('b');
    a.next = b;

    expect(isCircularList(list), 'two items linear test').to.equal(false);

    b.next = a;

    expect(isCircularList(list), 'two items circular test').to.equal(true);
  });

  it('should return correctly on odd size list', () => {
    const a = new Node('a');
    const b = new Node('b');
    const c = new Node('c');
    const d = new Node('d');
    const e = new Node('e');
    list.head = a;
    a.next = b;
    b.next = c;
    c.next = d;
    d.next = e;

    expect(isCircularList(list), 'linear test').to.equal(false);

    e.next = a;
    expect(isCircularList(list), 'circular test 1').to.equal(true);

    e.next = b;
    expect(isCircularList(list), 'circular test 2').to.equal(true);

    e.next = c;
    expect(isCircularList(list), 'circular test 3').to.equal(true);

    e.next = d;
    expect(isCircularList(list), 'circular test 4').to.equal(true);
  });

  it('should return correctly on even size list', () => {
    const a = new Node('a');
    const b = new Node('b');
    const c = new Node('c');
    const d = new Node('d');
    const e = new Node('e');
    const f = new Node('f');
    list.head = a;
    a.next = b;
    b.next = c;
    c.next = d;
    d.next = e;
    e.next = f;

    expect(isCircularList(list), 'linear test').to.equal(false);

    f.next = a;
    expect(isCircularList(list), 'circular test 1').to.equal(true);

    f.next = b;
    expect(isCircularList(list), 'circular test 2').to.equal(true);

    f.next = c;
    expect(isCircularList(list), 'circular test 3').to.equal(true);

    f.next = d;
    expect(isCircularList(list), 'circular test 4').to.equal(true);

    f.next = e;
    expect(isCircularList(list), 'circular test 5').to.equal(true);
  });
});
