const nums = [100, 50, 0, 150, 100, 0, -30, 70];
const k = 3;

// function findMaxValues(nums, k) {
//   const sortNums = nums.sort((a, b) => a - b);
//   return sortNums.slice(-k);
// }

// console.log(findMaxValues(nums, k));

function findMaxValues(nums, k) {
  const result = [];

  for (let i = 0; i < k; i++) {
    let maxIndex = 0;
    for (let j = 1; j < nums.length; j++) {
      if (nums[j] > nums[maxIndex]) {
        maxIndex = j;
      }
    }
    result.push(nums[maxIndex]);
    nums[maxIndex] = 0;
  }
  return result;
}

console.log(findMaxValues(nums, k));
