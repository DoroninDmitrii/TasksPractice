const nums = [-4, -1, 0, 3, 10]

const sortedSquares = (nums) => {

  let result = []

  let leftIndex = 0
  let rightIndex = nums.length - 1

  for (let i = nums.length - 1; i >= 0; i--) {
    if (Math.abs(nums[leftIndex]) < Math.abs(nums[rightIndex])) {
      result[i] = nums[rightIndex] ** 2
      rightIndex--
    } else {
      result[i] = nums[leftIndex] ** 2
      leftIndex++
    }
  }
  return result
};


console.log(sortedSquares(nums));

// const sortedSquares = nums => {
//   for (let i = 0; i < nums.length; i++) {
//     nums[i] = nums[i] ** 2;
//   }
  
//   return nums.sort((a, b) => a - b);
// };

// console.log(sortedSquares(nums));
