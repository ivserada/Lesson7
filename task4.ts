// Написать функцию, которая возвращает объект в виде ключ (элемент массива) и значение (сколько раз элемент повторяется)

const array: string[] = ["orange", "apple", "banana", "apple", "orange", "orange"];

// const result: Record<string, number> = { orange: 3, apple: 2, banana: 1 };

function count(array1: string[]) {
  const count: Record<string, number> = {};
  for (const item of array1) {
    if (count[item]) {
      count[item]++;
    } else {
      count[item] = 1;
    }
  }
  return count;
}
console.log(count(array));
