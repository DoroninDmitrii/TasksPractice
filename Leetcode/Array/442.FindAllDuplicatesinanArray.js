const nums = [4, 3, 2, 7, 8, 2, 3, 1];
// Output: [2,3]

const findDuplicates = (nums) => {
  const hashMap = {};
  const result = [];

  for (let i = 0; i < nums.length; i++) {
    const current = nums[i];

    hashMap[current] ? hashMap[current] += 1 : hashMap[current] = 1;
  }

  for (let num in hashMap) {
    if (hashMap[num] > 1) {
      result.push(Number(num))
    }
  }
  return result;
};

console.log(findDuplicates(nums));
