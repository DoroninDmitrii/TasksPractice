const nums = [-1, 0, 1, 2, -1, -4];
const nums2 = [0, 1, 1];

const threeSum = (nums) => {
  const sortNums = nums.sort((a, b) => a - b);

  const result = [];

  for (let i = 0; i < sortNums.length; i++) {
    if (i > 0 && sortNums[i] === sortNums[i - 1]) {
      continue;
    }
    let left = i + 1;
    let right = sortNums.length - 1;

    while (left < right) {
      const sum = sortNums[i] + sortNums[left] + sortNums[right];
      if (sum > 0) {
        right--;
      }

      if (sum < 0) {
        left++
      }

      if (sum === 0) {
        result.push([sortNums[i], sortNums[left], sortNums[right]]);
        left++;
        while (nums[left] === nums[left - 1] && left < right) {
          left++;
        }
      }

    }
  }
  return result;
}

console.log(threeSum(nums));
