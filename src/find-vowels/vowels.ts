/**
 * Find vowels
 *
 * Given a sentence, function returns number of vowels for that sentence.
 * Vowels are 'a', 'e', 'i', 'o', and 'u'.
 *
 * ex)
 *
 * countVowels('Hello world'); -> 3
 * countVowels('My name is Shawnkoon!'); -> 6
 */

export const countVowels = (str: string): number => {
  let result: number = 0;
  const vowels: string[] = ['a', 'e', 'i', 'o', 'u'];

  for (const letter of str.toLowerCase()) {
    if (vowels.includes(letter)) {
      result++;
    }
  }

  return result;
};

export const countVowelsRegExp = (str: string): number => {
  const matches: string[] | null = str.match(/[aeiou]/gi);
  return matches ? matches.length : 0;
};
