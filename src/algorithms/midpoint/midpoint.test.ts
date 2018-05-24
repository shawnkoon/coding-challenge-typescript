// Lib
import { expect } from 'chai';

// App
import { LinkedList } from 'datastructures/linked-list';
import { getMidPoint } from './midpoint';

describe('midpoint LinkedList', () => {
  let list: LinkedList;

  beforeEach(() => {
    list = new LinkedList();
    list.insertLast('a');
    list.insertLast('b');
    list.insertLast('c');
    list.insertLast('d');
    list.insertLast('e');
  });

  it('should return undefined on empty list', () => {
    list.clear();
    expect(getMidPoint(list)).to.equal(undefined);
  });

  it('should return itself on one item / two item list', () => {
    list.clear();
    list.insertLast('a');

    expect(getMidPoint(list)!.data, 'one item test').to.equal('a');

    list.insertLast('b');

    expect(getMidPoint(list)!.data, 'two items test').to.equal('a');
  });

  it('should return correct mid Node on odd size list', () => {
    expect(getMidPoint(list)!.data).to.equal('c');
  });

  it('should return correct mid Node on even size list', () => {
    list.insertLast('f');
    expect(getMidPoint(list)!.data).to.equal('c');
  });
});
