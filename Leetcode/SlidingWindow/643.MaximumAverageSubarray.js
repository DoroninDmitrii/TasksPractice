const nums = [1, 12, -5, -6, 50, 3];
const k = 4;
// Output: 12.75000

// const findMaxAverage = function(nums, k) {
//     let sum = 0;

//     for (let i = 0; i < k; i++) {
//       sum += nums[i];
//     }

//     let result = sum;

//     for (let i = k; i < nums.length; i++) {
//       sum += nums[i] - nums[i - k];
//       result = Math.max(result, sum);
//     }

//     return result / k;
// };

// console.log(findMaxAverage(nums, k));

const findMaxAverage = function (nums, k) {
  let maxAverage = 0;

  for (let i = 0; i < nums.length - k; i++) {
    let sum = 0;
    for (let j = i; j < i + k; j++) {
      sum += nums[j];
    }
    const average = sum / k;
    maxAverage = Math.max(maxAverage, average);
  }
  return maxAverage
};

console.log(findMaxAverage(nums, k));
