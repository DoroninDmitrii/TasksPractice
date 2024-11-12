const compress = (nums) => {
  const sortNums = nums.sort((a, b) => a - b);
  
  let pointer = 0;
  const result = [];
  
  for (let i = 0; i < sortNums.length; i++) {
    if (nums[i + 1] - nums[i] !== 1) {
      if (nums[pointer] === nums[i]) {
        result.push(String(nums[i]));
      } else {
        result.push(`${nums[pointer]}-${nums[i]}`);
      }
      pointer = i + 1;
    }
  }
  return result;
}


console.log(compress([3, 2, 1, 5, 6, -1, 10])); // '-1,1-3,5-6,10' 

