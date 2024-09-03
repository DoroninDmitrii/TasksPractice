const getMajorityNum = (nums) => {
  const hashMap = {};

  for (let i = 0; i < nums.length; i++) {
    const curr = nums[i];

    hashMap[curr] ? hashMap[curr] += 1 : hashMap[curr] = 1;
  }
  
  let result = 0;
  let maxCount = 0;

  for (let key in hashMap) {
    if (hashMap[key] > maxCount) {
      maxCount = hashMap[key];
      result = Number(key);
    }
  }
  return result;
}


console.log(getMajorityNum([3, 2, 3])); // 3
console.log(getMajorityNum([2, 2, 1, 1, 1, 2, 2])); // 2
