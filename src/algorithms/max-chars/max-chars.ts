/**
 * Given string, find most used character in string.
 *
 * ex)
 *
 * maxChar("abccccdde") === "c"
 * maxChar("I am here 111211") === "1"
 */

export const maxChar = (str: string): string => {
  let char: string = '';
  let count: number = 0;

  for (const current of str) {
    let occurences: number = 0;
    for (const check of str) {
      if (current === check) {
        occurences++;
      }
    }

    if (occurences >= count) {
      char = current;
      count = occurences;
    }
  }

  return char;
};

// Using Map object
export const maxCharMap = (str: string): string => {
  const charMap: Map<string, number> = new Map();
  let maxCharacter: string = '';
  let maxCount: number = 0;

  // build map
  for (const char of str) {
    if (charMap.has(char)) {
      charMap.set(char, charMap.get(char)! + 1);
    } else {
      charMap.set(char, 1);
    }
  }

  // find max
  charMap.forEach((count: number, char: string) => {
    if (count >= maxCount) {
      maxCount = count;
      maxCharacter = char;
    }
  });

  return maxCharacter;
};
