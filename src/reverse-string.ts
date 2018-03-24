/**
 * Reverse String.
 *
 * ex) 'abc' -> 'cba'
 */

export const reverse = (str: string): string => {
  let res: string = '';
  for (let i = str.length - 1; i >= 0; i--) {
    res += str.charAt(i);
  }
  return res;
};

/**
 * reverse
 * @param str: string to be reversed.
 */
export const reverseInES6 = (str: string): string => {
  return str.split('').reduce((prev: string, _cur: string, index: number, ara: string[]) => {
    return prev += ara[(ara.length - 1) - index];
  }, '');
};
