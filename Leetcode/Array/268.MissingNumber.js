// const nums = [4, 2, 0, 1];
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
  let expectedSum = (n * (n + 1)) / 2;
  let actualSum = nums.reduce((acc, el) => acc + el);
  return expectedSum - actualSum;
};

console.log(missingNumber(nums));
