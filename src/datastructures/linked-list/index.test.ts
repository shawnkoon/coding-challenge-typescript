// Lib
import { expect } from 'chai';

// App
import { LinkedList, Node } from '../linked-list';

// Test Source
// https://github.com/StephenGrider/AlgoCasts/tree/master/exercises/linkedlist

describe('Linked Lists', () => {
  it('should say LinkedList is a class', () => {
    expect(typeof LinkedList.prototype.constructor).to.equal('function');
  });

  it('should say Node is a class', () => {
    expect(typeof Node.prototype.constructor).to.equal('function');
  });

  describe('A Node', () => {
    it('should has properties "data" and "next"', () => {
      const node = new Node('hi');
      const node2 = new Node('a', node);
      expect(node2.data).to.equal('a');
      expect(node2.next).to.equal(node);
      expect(node2.next!.next).to.equal(undefined);
    });
  });

  describe('Insert First', () => {
    it('should appends a node to the start of the list', () => {
      const l = new LinkedList();
      l.insertFirst(1);
      expect(l.head!.data).to.equal(1);
      l.insertFirst(2);
      expect(l.head!.data).to.equal(2);
    });
  });

  describe('Size', () => {
    it('should returns the number of items in the linked list', () => {
      const l = new LinkedList();
      expect(l.size()).to.equal(0);
      l.insertFirst(1);
      l.insertFirst(1);
      l.insertFirst(1);
      l.insertFirst(1);
      expect(l.size()).to.equal(4);
    });
  });

  describe('GetFirst', () => {
    it('should returns the first element', () => {
      const l = new LinkedList();
      l.insertFirst(1);
      expect(l.getFirst()!.data).to.equal(1);
      l.insertFirst(2);
      expect(l.getFirst()!.data).to.equal(2);
    });
  });

  describe('GetLast', () => {
    it('should returns the last element', () => {
      const l = new LinkedList();
      l.insertFirst(2);
      expect(l.getLast()).to.deep.equal({ data: 2, next: undefined });
      l.insertFirst(1);
      expect(l.getLast()).to.deep.equal({ data: 2, next: undefined });
    });
  });

  describe('Clear', () => {
    it('should empties out the list', () => {
      const l = new LinkedList();
      expect(l.size()).to.equal(0);
      l.insertFirst(1);
      l.insertFirst(1);
      l.insertFirst(1);
      l.insertFirst(1);
      expect(l.size()).to.equal(4);
      l.clear();
      expect(l.size()).to.equal(0);
    });
  });

  describe('RemoveFirst', () => {
    it('should removes the first node when the list has a size of one', () => {
      const l = new LinkedList();
      l.insertFirst('a');
      l.removeFirst();
      expect(l.size()).to.equal(0);
      expect(l.getFirst()).to.equal(undefined);
    });

    it('should removes the first node when the list has a size of three', () => {
      const l = new LinkedList();
      l.insertFirst('c');
      l.insertFirst('b');
      l.insertFirst('a');
      l.removeFirst();
      expect(l.size()).to.equal(2);
      expect(l.getFirst()!.data).to.equal('b');
      l.removeFirst();
      expect(l.size()).to.equal(1);
      expect(l.getFirst()!.data).to.equal('c');
    });
  });

  describe('RemoveLast', () => {
    it('should RemoveLast removes the last node when list is empty', () => {
      const l = new LinkedList();
      expect(() => {
        l.removeLast();
      }).not.throw();
    });

    it('should RemoveLast removes the last node when list is length 1', () => {
      const l = new LinkedList();
      l.insertFirst('a');
      l.removeLast();
      expect(l.head).to.equal(undefined);
    });

    it('should RemoveLast removes the last node when list is length 2', () => {
      const l = new LinkedList();
      l.insertFirst('b');
      l.insertFirst('a');

      l.removeLast();

      expect(l.size()).to.equal(1);
      expect(l.head!.data).to.equal('a');
    });

    it('should RemoveLast removes the last node when list is length 3', () => {
      const l = new LinkedList();
      l.insertFirst('c');
      l.insertFirst('b');
      l.insertFirst('a');
      l.removeLast();

      expect(l.size()).to.equal(2);
      expect(l.getLast()!.data).to.equal('b');
    });
  });

  describe('InsertLast', () => {
    it('should adds to the end of the list', () => {
      const l = new LinkedList();
      l.insertFirst('a');

      l.insertLast('b');

      expect(l.size()).to.equal(2);
      expect(l.getLast()!.data).to.equal('b');
    });
  });

  describe('GetAt', () => {
    it('should returns the node at given index', () => {
      const l = new LinkedList();
      expect(l.getAt(10)).to.equal(undefined);

      l.insertLast(1);
      l.insertLast(2);
      l.insertLast(3);
      l.insertLast(4);

      expect(l.getAt(0)!.data).to.equal(1);
      expect(l.getAt(1)!.data).to.equal(2);
      expect(l.getAt(2)!.data).to.equal(3);
      expect(l.getAt(3)!.data).to.equal(4);
    });
  });

  describe('RemoveAt', () => {
    it('should removeAt doesnt crash on an empty list', () => {
      const l = new LinkedList();
      expect(() => {
        l.removeAt(0);
        l.removeAt(1);
        l.removeAt(2);
      }).not.throw();
    });

    it('should removeAt doesnt crash on an index out of bounds', () => {
      const l = new LinkedList();
      expect(() => {
        l.insertFirst('a');
        l.removeAt(1);
      }).not.throw();
    });

    it('should removeAt deletes the first node', () => {
      const l = new LinkedList();
      l.insertLast(1);
      l.insertLast(2);
      l.insertLast(3);
      l.insertLast(4);
      expect(l.getAt(0)!.data).to.equal(1);
      l.removeAt(0);
      expect(l.getAt(0)!.data).to.equal(2);
    });

    it('should removeAt deletes the node at the given index', () => {
      const l = new LinkedList();
      l.insertLast(1);
      l.insertLast(2);
      l.insertLast(3);
      l.insertLast(4);
      expect(l.getAt(1)!.data).to.equal(2);
      l.removeAt(1);
      expect(l.getAt(1)!.data).to.equal(3);
    });

    it('should removeAt works on the last node', () => {
      const l = new LinkedList();
      l.insertLast(1);
      l.insertLast(2);
      l.insertLast(3);
      l.insertLast(4);
      expect(l.getAt(3)!.data).to.equal(4);
      l.removeAt(3);
      expect(l.getAt(3)).to.equal(undefined);
    });
  });

  describe('InsertAt', () => {
    it('should inserts a new node with data at the 0 index when the list is empty', () => {
      const l = new LinkedList();
      l.insertAt('hi', 0);
      expect(l.getFirst()!.data).to.equal('hi');
    });

    it('should inserts a new node with data at the 0 index when the list has elements', () => {
      const l = new LinkedList();
      l.insertLast('a');
      l.insertLast('b');
      l.insertLast('c');
      l.insertAt('hi', 0);
      expect(l.getAt(0)!.data).to.equal('hi');
      expect(l.getAt(1)!.data).to.equal('a');
      expect(l.getAt(2)!.data).to.equal('b');
      expect(l.getAt(3)!.data).to.equal('c');
    });

    it('should inserts a new node with data at a middle index', () => {
      const l = new LinkedList();
      l.insertLast('a');
      l.insertLast('b');
      l.insertLast('c');
      l.insertLast('d');
      l.insertAt('hi', 2);
      expect(l.getAt(0)!.data).to.equal('a');
      expect(l.getAt(1)!.data).to.equal('b');
      expect(l.getAt(2)!.data).to.equal('hi');
      expect(l.getAt(3)!.data).to.equal('c');
      expect(l.getAt(4)!.data).to.equal('d');
    });

    it('should inserts a new node with data at a last index', () => {
      const l = new LinkedList();
      l.insertLast('a');
      l.insertLast('b');
      l.insertAt('hi', 2);
      expect(l.getAt(0)!.data).to.equal('a');
      expect(l.getAt(1)!.data).to.equal('b');
      expect(l.getAt(2)!.data).to.equal('hi');
    });

    it('should insert a new node when index is out of bounds', () => {
      const l = new LinkedList();
      l.insertLast('a');
      l.insertLast('b');
      l.insertAt('hi', 30);

      expect(l.getAt(0)!.data).to.equal('a');
      expect(l.getAt(1)!.data).to.equal('b');
      expect(l.getAt(2)!.data).to.equal('hi');
    });
  });

  describe('ForEach', () => {
    it('should applies a transform to each node', () => {
      const l = new LinkedList();

      l.insertLast(1);
      l.insertLast(2);
      l.insertLast(3);
      l.insertLast(4);

      l.forEach((node: any) => {
        node.data += 10;
      });

      expect(l.getAt(0)!.data).to.equal(11);
      expect(l.getAt(1)!.data).to.equal(12);
      expect(l.getAt(2)!.data).to.equal(13);
      expect(l.getAt(3)!.data).to.equal(14);
    });
  });

  describe('for...of loops', () => {
    it('should works with the linked list', () => {
      const l = new LinkedList();

      l.insertLast(1);
      l.insertLast(2);
      l.insertLast(3);
      l.insertLast(4);

      for (const node of l) {
        node.data += 10;
      }

      expect(l.getAt(0)!.data).to.equal(11);
      expect(l.getAt(1)!.data).to.equal(12);
      expect(l.getAt(2)!.data).to.equal(13);
      expect(l.getAt(3)!.data).to.equal(14);
    });

    it('should for...of works on an empty list', () => {
      const l = new LinkedList();
      expect(() => {
        // tslint:disable no-empty
        for (const _node of l) { }
      }).not.throw();
    });
  });

});
