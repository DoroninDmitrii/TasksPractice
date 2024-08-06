const getMostFrequentNums = (nums, limit) => {
  const hashMap = {};

  for (let i = 0; i < nums.length; i++) {
    const current = nums[i];
    hashMap[current] ? hashMap[current] += 1 : hashMap[current] = 1;
  }

  const arr = Object.entries(hashMap).sort((a, b) => b[1] - a[1]);

  const result = [];

  for (let i = 0; i < limit; i++) {
    result.push(Number(arr[i][0]))
  }
  return result;
}


console.log(getMostFrequentNums([1, 1, 1, 2, 2, 3], 2)); // [1, 2]
// console.log(getMostFrequentNums([1, 1, 1, 2, 2, 3], 3)); // [1, 2, 3]
// console.log(getMostFrequentNums([1, 1, 1, 2, 2, 3], 4)); // [1, 2, 3]
// console.log(getMostFrequentNums([1], 1)); // [1]
