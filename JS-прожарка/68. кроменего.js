const multiplyNumsExceptSelf = (nums) => {  
  let result = [];

  let leftPointer = 1;
  for (let i = 0; i < nums.length; i++) {
    result[i] = leftPointer;
    leftPointer *= nums[i];
  }

  let rightPointer = 1;
  for (let i = nums.length - 1; i >= 0; i--) {
    result[i] *= rightPointer;
    rightPointer *= nums[i];
  }
  return result;
}

console.log(multiplyNumsExceptSelf([1, 2, 3, 4])); // [24, 12, 8, 6]
// console.log(multiplyNumsExceptSelf([-1, 1, 0, -3, 3])); // [0, 0, 9, 0, 0]
// console.log(multiplyNumsExceptSelf([-1, 0, 0, -3, 3])); // [0, 0, 0, 0, 0]
