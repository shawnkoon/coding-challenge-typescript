/**
 * Reverse-int
 *
 * ex)
 *
 * 152 -> 251
 * -90 -> -9
 * -152 -> -251
 * 500 -> 5
 */

export const reverse = (number: number): number => {
  let cur: number = number;
  let res: number = 0;

  while (cur !== 0) {
    const digit: number = cur % 10;
    res += digit * Math.pow(10, Math.abs(cur).toString().length - 1);
    cur = Math.trunc(cur / 10);
  }

  return res;
};

// recursive solution
export const reverseRec = (number: number): number => {
  if (number === 0) {
    return 0;
  }

  const digit = number % 10;

  return digit * Math.pow(10, Math.abs(number).toString().length - 1) + reverseRec(Math.trunc(number / 10));
};

// short solution
export const reverseShort = (number: number): number => {
  const reversed: string = Math.abs(number)
    .toString()
    .split('')
    .reverse()
    .join('');

  return parseInt(reversed, 10) * Math.sign(number);
};
