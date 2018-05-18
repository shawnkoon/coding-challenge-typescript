/**
 * Palindrome (Do include punctuation & spaces)
 *
 * ex)
 *
 * 'racecar', 'nursesrun' 'tacocat'
 *
 * edge cases)
 *
 * 'race car', 'nurses run', 'taco,cat'
 */

export const isPalindrome = (str: string): boolean => (
  str.split('').reverse().join('') === str
);

export const isPalindromeQuick = (str: string): boolean => {
  let res: boolean = true;
  const lastIndex: number = str.length - 1;

  for (let i = 0; i < (lastIndex / 2); i++) {
    if (str[i] !== str[lastIndex - i]) {
      res = false;
      break;
    }
  }

  return res;
};
