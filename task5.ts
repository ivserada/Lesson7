// Написать функцию, которая разворачивает вложенные массивы в один

const array = [1, [2, 3], [4], 5, [6, 7, 8]];

function pseudoFlat(arr: unknown[]): unknown[] {
  const result = [];
  for (const item of arr) {
    if (Array.isArray(item)) {
      result.push(...pseudoFlat(item));
    } else {
      result.push(item);
    }
  }
  return result;
}
console.log(pseudoFlat(array));
