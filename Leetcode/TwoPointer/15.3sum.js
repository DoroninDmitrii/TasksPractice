// const nums = [-1, 0, 1, 2, -1, -4];

// const threeSum = (nums, target = 0) => {

//   const result = [];

//   if (nums.length < 3) {
//     return result;
//   }

//   nums.sort((a, b) => a - b);

//   for (let left = 0; left < nums.length - 2; left++) {

//     if (nums[left] > target) break;

//     if (left > 0 && nums[left] === nums[left - 1]) {
//       continue;
//     }

//     let middle = left + 1;
//     let right = nums.length - 1;

//     while (middle < right) {
//       const sum = nums[left] + nums[middle] + nums[right];

//       if (target === sum) {
//         result.push([nums[left], nums[middle], nums[right]]);

//         while(nums[middle] === nums[middle + 1]) middle++;
//         while(nums[right] === nums[right + 1]) right++;

//         middle++;
//         right--;
//         continue;
//       }

//       if (sum < target) {
//         middle++;
//         continue;
//       }

//       if (sum > target) {
//         right--;
//         continue;
//       }
//     }
//   }
//   return result;
// }

// console.log(threeSum(nums));


const nums = [-1, 0, 1, 2, -1, -4];

const threeSum = (nums) => {
  const res = [];

  nums.sort((a, b) => a - b);

  for (let i = 0; i < nums.length; i++) {
    if (i > 0 && nums[i] === nums[i - 1]) {
      continue;
    }

    let left = i + 1;
    let rigth = nums.length - 1;

    while (left < rigth) {
      let total = nums[i] + nums[left] + nums[rigth];

      if (total > 0) {
        rigth--;
      } else if (total < 0) {
        left++;
      } else {
        res.push([nums[i], nums[left], nums[rigth]]);
        left++;

        while (nums[left] === nums[left - 1] && left < rigth) {
          left++;
        } 
      }
    }
  }
  return res;
}

console.log(threeSum(nums));
