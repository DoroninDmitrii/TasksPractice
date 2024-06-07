const nums1 = [1, 2, 3];
const nums2 = [2, 5, 6];
// Output: [1,2,2,3,5,6]


const merge = (nums1, nums2) => {

  let pointerNums1 = 0;
  let pointerNums2 = 0;

  const result = [];

  while (pointerNums1 < nums1.length || pointerNums2 < nums2.length) {
    const firstItem = nums1[pointerNums1];
    const secondItem = nums2[pointerNums2];

    if (firstItem === undefined) {
      result.push(secondItem);
      pointerNums2++;
      continue;
    }

    if (secondItem === undefined) {
      result.push(firstItem);
      pointerNums1++;
      continue;
    }

    if (firstItem === secondItem) {
      result.push(firstItem, secondItem);
      pointerNums1++;
      pointerNums2++;
      continue;
    }

    if (firstItem < secondItem) {
      result.push(firstItem);
      pointerNums1++;
    }

    if (firstItem > secondItem) {
      result.push(secondItem);
      pointerNums2++;
    }
  }
  return result;
}

console.log(merge(nums1, nums2));


