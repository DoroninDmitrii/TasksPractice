const findMaxSubarrayValue = (arr) => {
  if (arr.length === 0) {
    return 0;
  }

  let maxCurrent = arr[0];
  let maxGlobal = arr[0];

  for (let i = 1; i < arr.length; i++) {
    maxCurrent = Math.max(arr[i], maxCurrent + arr[i]);
    maxGlobal = Math.max(maxCurrent, maxGlobal);
  }
  console.log(maxGlobal);
  return maxGlobal;
}


findMaxSubarrayValue([5, 4, -1, 7, 8]); // 23
