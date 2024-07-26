// Дан массив целых чисел:

const arr = [1, 4, 5, 2, 3, 9, 8, 11, 0];

// Нужно разобрать его на диапазоны и вывести результат:
// [[0, 5], [8, 9], [11]]

const organizeInRange = (arr) => {
  const sortArr = arr.sort((a, b) => a - b);
  
  const result = [];
  let pointer = 0;
  
  for (let i = 0; i < sortArr.length; i++) {
    if (arr[i + 1] - arr[i] !== 1) {
      if (arr[pointer] === arr[i]) {
        result.push([arr[i]])
      } else {
        result.push([arr[pointer], arr[i]]);
      }
      pointer = i + 1;
    }
  }
  return result;
};

console.log(organizeInRange(arr));
