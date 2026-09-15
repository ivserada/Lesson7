// Написать функцию, которая будет удалять дубликаты из массива, при этом исходный массив не меняется

// Использовать наиболее быстрое решение

const array: number[] = [1, 5, 7, 8, 5, 8, 3];
function dupeDel() {
  const deduped: Record<string, number> = {};
  for (const item of array) {
    if (!deduped[item]) {
      deduped[item] = item;
    }
  }
  return Object.values(deduped);
}
console.log(dupeDel());
