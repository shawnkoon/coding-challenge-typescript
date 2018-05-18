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

export const reverseFunction = (str: string): string => {
  const charArray = str.split('');
  return charArray.reverse().join('');
};

/**
 * reverse
 * @param str: string to be reversed.
 */
export const reverseInES6 = (str: string): string => {
  return str.split('').reduce((prev: string, cur: string) => cur + prev, '');
};
