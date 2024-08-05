const nums = [1,2,3,4];
// Output: [24,12,8,6]

const productExceptSelf = (nums) => {
  const n = nums.length; 
  const result =  new Array(n);

  let prefix = 1;

  for (let i = 0; i < n; i++) {
    result[i] = prefix;
    prefix *= nums[i];
  }

  let suffix = 1;

  for (let i = n - 1; i >= 0; i--) {
    result[i] *= suffix;
    suffix *= nums[i];
  }
  return result;
};

console.log(productExceptSelf(nums));
