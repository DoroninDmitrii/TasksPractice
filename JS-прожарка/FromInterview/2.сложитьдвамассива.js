// Мы хотим складывать очень большие числа, которые превышают емкость базовых типов, поэтому мы храним их в виде массива неотрицательных чисел.

// Нужно написать функцию, которая примет на вход два таких массива, вычислит сумму чисел, представленных массивами, и вернет результат в виде такого же массива.

// # Пример 1
// # ввод
// arr1 = [1, 2, 3] # число 123
// arr2 = [4, 5, 6] # число 456
// # вывод

const arrFirst = [2, 9, 8, 9];
const arrSecond = [1, 2];

const sumTwoArr = (arrFirst, arrSecond) => {
  const maxLengthOfArr = Math.max(arrFirst.length, arrSecond.length);

  let currentSum = 0;
  let result = [];

  for (let i = 0; i < maxLengthOfArr; i++) {
    let arg1 = arrFirst[arrFirst.length - 1 - i] || 0;
    let arg2 = arrSecond[arrSecond.length - 1 - i] || 0;

    let sum = arg1 + arg2 + currentSum;

    if (sum > 9) {
      currentSum = 1;
      sum = sum - 10; 
    } else {
      currentSum = 0;
    }
    result.unshift(sum);
  }

  if (currentSum === 1) {
    result.unshift(currentSum);
  }
  return result;
};

console.log(sumTwoArr(arrFirst, arrSecond));

