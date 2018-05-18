/**
 * Array Chunking
 *
 * ex)
 *
 * chunk([1,2,3,4], 2) => [ [1,2], [3,4] ]
 * chunk([1,2,3,4,5], 2) => [ [1,2], [3,4], [5] ]
 * chunk([1,2,3,4,5], 4) => [ [1,2,3,4], [5]]
 * chunk([1,2,3,4], 5) => [ [1,2,3,4] ]
 */

export const chunk = (ara: any[], size: any): any[][] => {
  const result: any[][] = new Array();
  let chunkAra: any[] = new Array();

  for (const value of ara) {
    if (chunkAra.length < size) {
      chunkAra.push(value);
    } else {
      result.push(chunkAra);
      chunkAra = [value];
    }
  }

  if (chunkAra.length !== 0) {
    result.push(chunkAra);
  }

  return result;
};

// Referencing memory in array
export const chunkWithMem = (ara: any[], size: any): any[][] => {
  const result: any[][] = new Array();

  for (const value of ara) {
    const last = result[result.length - 1];

    if (!last || last.length === size) {
      result.push([value]);
    } else {
      last.push(value);
    }
  }

  return result;
};

// Using ES6
export const chunkWithES6 = (ara: any[], size: any): any[][] => {
  const result: any[][] = new Array();
  let araClone: any[] = ara;

  while (araClone.length !== 0) {
    result.push(araClone.slice(0, size));
    araClone = araClone.splice(size);
  }

  return result;
};
