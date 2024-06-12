const arr = [0, 1, 1, 1, 0, 1, 1, 0, 1];

function longestSubArray(nums) {
  let maxLen = 0;
  let left = 0;
  let zeroCount = 0;


  for (let right = 0; right < nums.length; right++) {

    if (nums[right] === 0) {
      zeroCount++;
    }

    while (zeroCount > 1) {
      if (nums[left] === 0) {
        zeroCount--;
      }
      left++;
    }
    maxLen = Math.max(maxLen, right - left);
  }
  return maxLen;
}

console.log(longestSubArray(arr));
