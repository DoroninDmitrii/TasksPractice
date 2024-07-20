const getLocalMax = (arr, localeSize) => {

  let result = [];

  for (let i = 0; i <= arr.length - localeSize; i++) {
    let max = 0;
    for (let k = 0; k < localeSize; k++) {
      if (arr[i + k] > max) {
        max = arr[i + k];
      }
    }
    result.push(max);
  }
  return result;
};

console.log(getLocalMax([1, 3, -1, 5, 7], 3));
// [3, 5, 7]

// console.log(getLocalMax([1, 3, -1, -3, 5, 1, 1, 1, 2], 3));
// [3, 3, 5, 5, 5, 1, 2]
