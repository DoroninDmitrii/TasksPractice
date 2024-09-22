// const nums1 = [1,2,2,1]; 
// const nums2 = [2,2];

const nums1 = [4, 9, 5];
const nums2 = [9, 4, 9, 8, 4]

// Output: [2,2]

const intersect = function (nums1, nums2) {

  let hashMap = new Map();
  let result = [];

  for (let i = 0; i < nums1.length; i++) {
    const curr = nums1[i];

    hashMap.set(curr, (hashMap.get(curr) || 0) + 1);
  }

  for (let i = 0; i < nums2.length; i++) {
    const curr = nums2[i];

    if (hashMap.has(curr) && hashMap.get(curr) > 0) {
      result.push(curr);
      hashMap.set(curr, hashMap.get(curr) - 1);
    }
  }
  return result;
};

console.log(intersect(nums1, nums2));
