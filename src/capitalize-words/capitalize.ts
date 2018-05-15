/**
 * Capitalize Words
 *
 * Given valid sentence, capitalize first character of each words in that sentence and
 * return newly created capitzlied sentence.
 *
 * ex)
 *
 * 'Hello I am shawnkoon' -> 'Hello I Am Shawnkoon'
 * 'who are you?' -> 'Who Are You?'
 * 'oh no, i am shawn!!' -> 'Oh No, I Am Shawn!!'
 */

export const capitalize = (str: string): string => {
  const result: string[] = [];

  for (const word of str.split(' ')) {
    const letters = word.split('');
    result.push(`${letters[0].toUpperCase()}${letters.slice(1).join('')}`);
  }

  return result.join(' ');
};
