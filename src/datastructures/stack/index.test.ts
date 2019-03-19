// Lib
import { expect } from 'chai';

// App
import { Stack } from '../stack';

describe('Stack', () => {
  let stack = new Stack<number>();
  const insertArray = [1, 2, 3];
  const stackArray = [...insertArray, 4];
  beforeEach(() => {
    stack = new Stack<number>();
    for (const item of insertArray) {
      stack.push(item);
    }
  });

  it(`should return ${insertArray[insertArray.length - 1]} for stack.peek(); call`, () => {
    expect(stack.peek()).to.equal(insertArray[insertArray.length - 1]);
  });

  it(`should return ${insertArray[insertArray.length - 1]} for stack.pop(); call`, () => {
    expect(stack.pop()).to.equal(insertArray[insertArray.length - 1]);
  });

  it(`should return ${stackArray.toString()} after stack.push(4);`, () => {
    stack.push(4);
    expect(stack.toString()).to.equal(stackArray.toString());
  });

  it('should return undefined if no item is left to pop() in the stack', () => {
    insertArray.forEach(() => {
      stack.pop();
    });

    expect(stack.pop()).to.equal(undefined);
  });
});
