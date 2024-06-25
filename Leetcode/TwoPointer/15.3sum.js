const nums = [-1, 0, 1, 2, -1, -4];

// const threeSum = (nums) => {
//   const sortNums = nums.sort((a, b) => a - b);

//   const result = [];

//   for (let i = 0; i < sortNums.length; i++) {
//     if (i > 0 && sortNums[i] === sortNums[i - 1]) {
//       continue;
//     }
//     let left = i + 1;
//     let right = sortNums.length - 1;

//     while (left < right) {
//       const sum = sortNums[i] + sortNums[left] + sortNums[right];
//       if (sum > 0) {
//         right--;
//       }

//       if (sum < 0) {
//         left++
//       }

//       if (sum === 0) {
//         result.push([sortNums[i], sortNums[left], sortNums[right]]);
//         left++;
//         while (nums[left] === nums[left - 1] && left < right) {
//           left++;
//         }
//       }

//     }
//   }
//   return result;
// }

// console.log(threeSum(nums));

const threeSum = (nums) => {
  const result = [];

  if (nums.length < 3) return result;

  nums = nums.sort((a, b) => a - b);

  let target = 0;

  for (let i = 0; i < nums.length; i++) {
    const current = nums[i];
    // `i` represents the "left" most number in our sorted set.
    // once this number hits 0, there's no need to go further since
    // positive numbers cannot sum to a negative number
    if (current > target) break;
    // we don't want repeats, so skip numbers we've already seen
    if (i > 0 && nums[i] === nums[i - 1]) continue;

    let middle = i + 1;
    let right = nums.length - 1;

    // to summarize our setup, we have `i` that starts at the beginning,
    // `k` that starts at the end, and `j` that races in between the two.

    while (middle < right) {
      let sum = nums[i] + nums[middle] + nums[right];

      if (sum === target) {
        result.push([nums[i], nums[middle], nums[right]]);

        while (nums[middle] === nums[middle + 1]) middle++;
        while (nums[right] === nums[right - 1]) right--;

        middle++;
        right--;
      } else if (sum < target) {
        middle++;
      } else {
        right--;
      }
    }
  }
  return result;
}

console.log(threeSum(nums));
