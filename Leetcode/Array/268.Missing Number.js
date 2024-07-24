const nums = [4, 2, 0, 1];
// Output: 8

// const missingNumber = function(nums) {
//   let sum = nums.length;

//   for (let i = 0; i < nums.length; i++) {
//     sum = sum + i - nums[i];
//   }
//   return sum;
// };

// console.log(missingNumber(nums));

const missingNumber = function (nums) {
  let n = nums.length;
  let sum1 = (n * (n + 1)) / 2;
  let sum2 = nums.reduce((acc, el) => acc + el);
  return sum1 - sum2;
};

console.log(missingNumber(nums));
