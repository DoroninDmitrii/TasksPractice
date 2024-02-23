const nums = [1, 1, 2, 3, 3, 4]

// The time complexity is O(N) and, space complexity is O(1).

// function RemoveDuplicate(nums) {

//   if (nums.length === 0) return 0

//   let index = 0

//   for (let k = 0; k < nums.length; k++) {
//     if (nums[k] !== nums[index]) {
//       nums[index] = nums[k]
//       index++
//     }
//   }
//   return index + 1
// }

// console.log(RemoveDuplicate(nums));

const removeDuplicate = (nums) => {
  let observed = {};
  let dupesArray = [];

  for (let i = 0; i < nums.length; i++) {
    const curr = nums[i];
    if (observed[curr]) {
      if (observed[curr] === 1) {
        dupesArray.push(curr);
      }
      observed[curr] = observed[curr + 1];
    } else {
      observed[curr] = 1;
    }
  }
  return dupesArray;
}

console.log(removeDuplicate(nums));

