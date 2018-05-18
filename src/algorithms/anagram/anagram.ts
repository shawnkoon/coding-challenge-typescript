/**
 * Anagram.
 *
 * When two arguments uses same exact variance of characters and
 * uses same exact number of those characters.
 * Exclude punchuations, spaces, and special characters.
 * Case insensitive.
 *
 * ex)
 * 'aa bb cc', 'ab bc ac' = True
 * 'Rail safety', 'fairy tales' = True
 * 'hh ii jj', 'hh ik jj' = False
 */

interface WordMap {
  [letter: string]: number | undefined;
}

export const isAnagram = (str1: string, str2: string): boolean => {
  const map1: WordMap = getMap(str1);
  const map2: WordMap = getMap(str2);

  return isCompose(map1, map2) && isCompose(map2, map1);
};

export const isAnagramQuick = (str1: string, str2: string): boolean => {
  return str1.replace(/[^\w]/g, '').toLowerCase().split('').sort().join()
    === str2.replace(/[^\w]/g, '').toLowerCase().split('').sort().join();
};

const isCompose = (from: WordMap, to: WordMap): boolean => {
  for (const letter in from) {
    if (!to[letter]) {
      return false;
    }
  }

  return true;
};

const getMap = (str: string): WordMap => {
  const map: WordMap = {};

  for (const char of str.replace(/[^\w]/g, '').toLowerCase()) {
    if (map[char]) {
      map[char]!++;
    } else {
      map[char] = 1;
    }
  }

  return map;
};
