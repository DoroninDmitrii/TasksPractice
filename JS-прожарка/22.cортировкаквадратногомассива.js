// Дан массив целых чисел в порядке возрастания:
// Нужно возвести каждое в квадрат
// сохранив оригинальную сортировку:
// [0, 1, 9, 16, 100],

const arr = [-4, -1, 0, 3, 10];

const squareElementsOfArray = (arr) => {

  let result = [];
  let left = 0;
  let rigth = arr.length - 1;

  for (let i = arr.length - 1; i >= 0; i-- ) {
    if (Math.abs(arr[left]) < Math.abs(arr[rigth])) {
      result[i] = arr[rigth] ** 2;
      rigth--;
    } else {
      result[i] = arr[left] ** 2;
      left++;
    }
  }
  return result;
};

console.log(squareElementsOfArray(arr));



