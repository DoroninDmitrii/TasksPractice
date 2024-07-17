const nums = [0, 1, 0, 3, 12];
// Output: [1,3,12,0,0]

// const moveZeroes = (nums) => {
//   let arrWithZeroes = [];
//   let arrWihtoutZeroes = [];

//   for (let i = 0; i < nums.length; i++) {
//     if (nums[i] === 0) {
//       arrWithZeroes.push(nums[i]);
//     } else {
//       arrWihtoutZeroes.push(nums[i]);
//     }
//   }
//   return [...arrWihtoutZeroes, ...arrWithZeroes];
// };

// console.log(moveZeroes(nums));

const moveZeroes = (nums) => {
  let pointerZero = 0;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i]) {
      [nums[pointerZero], nums[i]] = [nums[i], nums[pointerZero]];
      pointerZero++;
    }
  }
  return nums;
};

console.log(moveZeroes(nums));
