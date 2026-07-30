// const nums = [1,2,3,4];
// // Output: [24,12,8,6]

// const productExceptSelf = (nums) => {
//   const n = nums.length; 
//   const result =  new Array(n);

//   let prefix = 1;

//   for (let i = 0; i < n; i++) {
//     result[i] = prefix;
//     prefix *= nums[i];
//   }

//   let suffix = 1;

//   for (let i = n - 1; i >= 0; i--) {
//     result[i] *= suffix;
//     suffix *= nums[i];
//   }
//   return result;
// };

// console.log(productExceptSelf(nums));

const nums = [1,2,4,6];


const productExceptSelf = (nums) => {
  const n = nums.length;
  const res = new Array(n).fill(1);

  for (let i = 1; i < n; i++) {
    res[i] = res[i - 1] * nums[i - 1];
  }
  
  let postfix = 1;
  
  for (let i =  n - 1; i >= 0; i--) {
    res[i] *= postfix;
    postfix *= nums[i];
  }
  return res
}

console.log(productExceptSelf(nums));
