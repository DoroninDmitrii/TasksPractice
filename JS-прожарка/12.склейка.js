const nums1 = [1, 3, 4, 5, 8, 9, 11];
const nums2 = [3, 7, 8, 12, 15];


const mergeArr = (nums1, nums2) => {

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

console.log(mergeArr(nums1, nums2));
