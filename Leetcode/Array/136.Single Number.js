const nums = [4, 1, 2, 1, 2];
// Output: 4

const singleNumber = function(nums) {
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
    if (value === 1) {
      return key;
    }
  }
};

console.log(singleNumber(nums));
