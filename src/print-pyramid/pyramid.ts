/**
 * Printing Pyramid
 *
 * A function is given with positive number N.
 * Then the function needs to print pyramid to the console using '*' as characters.
 * Make sure to have spaces around '*' to unify the length of each pyramid layers.
 *
 * ex)
 * printPyramid(2);
 * ' * '
 * '***'
 *
 * printPyramid(3);
 * '  *  '
 * ' *** '
 * '*****'
 *
 * printPyramid(4);
 * '   *   '
 * '  ***  '
 * ' ***** '
 * '*******'
 */

export const printPyramid = (n: number, current: number = 1): void => {
  let result: string = '';

  const maxIndex = n * 2 - 1;

  for (let i = 0; i < maxIndex; i++) {
    const midIndex = Math.floor((maxIndex - 1) / 2);
    if (i < (midIndex - (current + 1)) || i > (midIndex + (current - 1))) {
      result += ' ';
    } else {
      result += '*';
    }
  }

  console.log(result);

  if (current < n) {
    printPyramid(n, current + 1);
  }
};
