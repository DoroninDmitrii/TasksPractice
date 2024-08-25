const nums = [1,2,2,3];
// Output: true
// const nums = [6,5,4,4];
// Output: true
// const nums = [1,3,2];
// const nums = [1,1,0];

// const isMonotonic = (nums) => {

//   if ((nums[0] > nums[1] && nums[0] > nums[nums.length - 1]) 
//     || (nums[0] === nums[1] && nums[0] > nums[nums.length - 1])) {
//     nums.reverse();
//   };

//   let pointer = 1;

//   for (let i = 0; i < nums.length; i++) {
//     if (nums[i] < nums[i + 1] || nums[i] === nums[i + 1]) {
//       pointer++;
//     }
//   }
//   return pointer === nums.length ? true : false;
// };

// console.log(isMonotonic(nums));

const isMonotonic = (nums) => {
  let increasing = true;
  let decreasing = true;

  for (let i = 1; i < nums.length; i++) {
    if (nums[i] > nums[i - 1]) {
      decreasing = false;
    }

    if (nums[i] < nums[i - 1]) {
      increasing = false;
    }
  }

  return increasing || decreasing;
};

console.log(isMonotonic(nums));
