const arr = [1, 2, 3, 4, 5, 6, 7, 7, 8, 6, 6, 10, 1000, 999,];

function findDouble(arr) {
  let maxArr = arr[0];
  let minArr = arr[0];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > maxArr) {
      maxArr = arr[i];
    } else {
      if (arr[i] < minArr) {
        minArr = arr[i];
      }
    }
  }
  return {minArr, maxArr}
}

console.log(findDouble(arr));
