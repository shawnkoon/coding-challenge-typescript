/**
 * Fizz Buzz problem.
 *
 * Create a function that
 * logs "fizz" when number that is multiple of three is passed in,
 * logs "buzz" when number that is multiple of five is passed in,
 * logs "fizzbuzz" when number that is multiple of both three and five,
 * logs number if non of those conditions are met.
 */

export const fizzBuzz = (n: number): string => {
  const isMultiple3: boolean = n % 3 === 0;
  const isMultiple5: boolean = n % 5 === 0;

  if (isMultiple3 && isMultiple5) {
    return "fizzbuzz";
  }

  if (isMultiple3) {
    return "fizz";
  }

  if (isMultiple5) {
    return "buzz";
  }

  return n.toString();
};
