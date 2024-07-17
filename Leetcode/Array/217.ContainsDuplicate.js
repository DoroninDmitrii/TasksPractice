// const nums = [1,1,1,3,3,4,3,2,4,2];
const nums = [2, 14, 18, 22, 22];

// const containsDuplicate = function (nums) {
//   const hash = {};
//   let result = [];

//   for (let i = 0; i < nums.length; i++) {
//     const current = nums[i];

//     hash[current] ? hash[current] += 1 : hash[current] = 1;
//   }

//   for (let key in hash) {
//     if (hash[key] > 1) {
//       result.push(hash[key])
//     }
//   }
//   return result.length > 0 ? true : false;
// };

// console.log(containsDuplicate(nums));

// const containsDuplicate = function (nums) {
//   const hash = new Set(nums);
//   return hash.size !== nums.length;
// };

// console.log(containsDuplicate(nums));

const containsDuplicate = function (nums) {
  const map = new Map();

  for (let i = 0; i < nums.length; i++) {
    const current = nums[i];

    if (map.has(current)) {
      map.set(current, map.get(current) + 1);
    } else {
      map.set(current, 1);
    }
  }
  
  for (let [key, value] of map) {
    if (value > 1) {
      return true;
    }
  }
  return false;
};

console.log(containsDuplicate(nums));
