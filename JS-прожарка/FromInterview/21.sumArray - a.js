let arr1 = [9, 9, 9];
let arr2 = [1];


const sumArray = (arr1, arr2) => {
  const maxArrLength = Math.max(arr1.length, arr2.length);

  const result = [];
  let currentSum = 0;

  for (let i = 0; i < maxArrLength; i++) {
    let arg1 = arr1[arr1.length - 1 - i];
    let arg2 = arr2[arr2.length - 1 - i];

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
