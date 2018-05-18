/**
 * Fibonacci
 *
 * Create function that prints out fibonacci number at
 * n-th entry in the series.
 * [0, 1, 1, 2, 3, 5, 8, 13, 21, 34, ...]
 *
 * ex)
 * getFibonacci(3) -> 2
 *
 * getFibonacci(5) -> 5
 *
 * getFibonacci(6) -> 8
 *
 * getFibonacci(9) -> 34
 */

export const getFibonacci = (n: number, prev: number = 0, cur: number = 1): number => {
  // Base case
  if (n === 0) {
    return 0;
  }

  if (n === 1) {
    return cur;
  }

  // Recursive case
  return getFibonacci(n - 1, cur, prev + cur);
};

/*
 Memoize basic concept

const x = () => {
  const a = [];

  return () => {
    console.log('a before push', a);
    a.push(a.length);

    return a;
  };
}

const mem = x();

console.log(mem());
console.log(mem());
console.log(mem());
console.log(mem());

------------------------------------------

a before push []
[0]

a before push [0]
(2) [0, 1]

a before push (2) [0, 1]
(3) [0, 1, 2]

a before push (3) [0, 1, 2]
(4) [0, 1, 2, 3]

*/

type FibonacciParams = (n: number) => number;

export const memoize = (slowFib: FibonacciParams): FibonacciParams => {
  const cache: { [n: number]: number } = {};

  return (n: number): number => {
    if (cache[n]) {
      return cache[n];
    }

    const result = slowFib(n);
    cache[n] = result;

    return result;
  };
};

export const getFibonacciSlow = (n: number): number => {
  if (n < 2) {
    return n;
  }

  return getFibonacciMemoized(n - 1) + getFibonacciMemoized(n - 2);
};

export const getFibonacciMemoized = memoize(getFibonacciSlow);
