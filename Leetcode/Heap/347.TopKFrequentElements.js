const nums = [1, 1, 1, 2, 2, 3];
const k = 2;
// Output: [1,2]

const frequentElements = (nums, k) => {
  let hashMap = {};

  let arr = [];

  for (let i = 0; i < nums.length; i++) {
    const current = nums[i];

    hashMap[current] ? (hashMap[current] += 1) : (hashMap[current] = 1);
  }

  const freqKey = Object.entries(hashMap);

  const sortFreeKey = freqKey.sort((a, b) => b[1] - a[1]);

  for (let i = 0; i < k; i++) {
    arr.push(Number(sortFreeKey[i][0]));
  }
  return arr;
};

console.log(frequentElements(nums, k));
