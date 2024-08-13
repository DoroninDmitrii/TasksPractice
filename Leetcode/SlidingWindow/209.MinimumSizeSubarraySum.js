// // Output: 2
// // Explanation: The subarray [4,3] has the minimal length under the problem constraint.
const target = 7;
const nums = [2, 3, 1, 2, 4, 3];

const minSubArrayLen = (nums, target) => {

  let sum = 0;
  let result = Infinity;
  let start = 0;

  for (let end = 0; end < nums.length; end++) {
    sum += nums[end];

    while (sum >= target) {
      result = Math.min(result, end - start + 1);
      sum -= nums[start];
      start++;
    }
  }
  return result === Infinity ? 0 : result;
};

console.log(minSubArrayLen(nums, target));
