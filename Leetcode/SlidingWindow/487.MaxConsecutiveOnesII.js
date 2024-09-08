const nums = [1, 0, 1, 1, 0];
// Output: 4
// Explanation: Flip the first zero will get the the maximum number of consecutive 1s.
// After flipping, the maximum number of consecutive 1s is 4.


const findMaxConsecutiveOnes = (nums) => {
  let left = 0;
  let result = 0;
  let zeroCount = 0;


  for (let right = 0; right < nums.length; right++) {
    const current = nums[right];

    if (current === 0) {
      zeroCount++;
    }

    while (zeroCount > 1) {
      if (nums[left] === 0) {
        zeroCount--;
      }
      left++;
    }


    result = Math.max(result, right - left + 1);
  }
  return result;
}

console.log(findMaxConsecutiveOnes(nums));
