const nums = [1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 0];
const k = 2;
// Output: 6
// Explanation: [1,1,1,0,0,1,1,1,1,1,1]

const longestOnes = function (nums, k) {
  let zeroCount = 0;
  let pointer = 0;
  let result = 0;

  for (let i = 0; i < nums.length; i++) {
    const current = nums[i];

    if (current === 0) {
      zeroCount++;
    }

    while (zeroCount > k) {
      if (nums[pointer] === 0) {
        zeroCount--;
      }
      pointer++;
    }

    result = Math.max(result, i - pointer + 1);
  }
  return result;
};

console.log(longestOnes(nums, k));

