let nums = [0, 1, 0, 3, 12];
// Output: [1,3,12,0,0]
const zero = (nums) => {
  let standardPointer = 0;

  for (let nonZeroPointer = 0; nonZeroPointer < nums.length; nonZeroPointer++) {
    if (nums[nonZeroPointer]) {
      [nums[standardPointer], nums[nonZeroPointer]] = [nums[nonZeroPointer], nums[standardPointer]];
      standardPointer++;
    }
  }
  return nums
}

console.log(zero(nums));
