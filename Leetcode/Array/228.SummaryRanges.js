const nums = [0, 1, 2, 4, 5, 7];
// Output: ["0->2","4->5","7"]

const summaryRanges = (nums) => {
  const result = [];
  let pointer = 0;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i + 1] - nums[i] !== 1) {
      if (nums[pointer] === nums[i]) {
        result.push(String(nums[i]));
      } else {
        result.push(`${nums[pointer]}->${nums[i]}`)
      }
      pointer = i + 1;
    }
  }
  return result;
}

console.log(summaryRanges(nums));


