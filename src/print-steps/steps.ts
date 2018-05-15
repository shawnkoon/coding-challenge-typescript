/**
 * Printing Steps
 *
 * A function is given with positive number N.
 * Then the function needs to print steps to the console using '*' as characters.
 * Make sure to have trailing spaces after '*' to unify the length of each steps.
 *
 * ex)
 * printSteps(2);
 * '* '
 * '**'
 *
 * printSteps(3);
 * '*  '
 * '** '
 * '***'
 */

export const printSteps = (n: number, position: number = 1): void => {
  let str: string = '';

  for (let i = 0; i < position; i++) {
    str += '*';
  }

  for (let i = 0; i < (n - position); i++) {
    str += ' ';
  }

  console.log(str);

  position < n && printSteps(n, position + 1);
};
