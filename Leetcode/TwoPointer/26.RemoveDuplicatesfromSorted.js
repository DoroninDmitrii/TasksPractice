const nums = [1,1,2,3,4]

const removeDuplicates = (nums) => {
  let left = 1;

  for (let right = 1; right < nums.length; right++) {
       if (nums[right] !== nums[right - 1]) {
         nums[left++] = nums[right]
       } 
  }
  return left;
}

console.log(removeDuplicates(nums));