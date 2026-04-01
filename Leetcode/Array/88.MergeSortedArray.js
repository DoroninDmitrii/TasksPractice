// const nums1 = [1, 2, 3];
// const nums2 = [2, 5, 6];
// // // Output: [1,2,2,3,5,6]


// const merge = (nums1, nums2) => {

//   let pointerNums1 = 0;
//   let pointerNums2 = 0;

//   const result = [];

//   while (pointerNums1 < nums1.length || pointerNums2 < nums2.length) {
//     const firstItem = nums1[pointerNums1];
//     const secondItem = nums2[pointerNums2];

//     if (firstItem === undefined) {
//       result.push(secondItem);
//       pointerNums2++;
//       continue;
//     }

//     if (secondItem === undefined) {
//       result.push(firstItem);
//       pointerNums1++;
//       continue;
//     }

//     if (firstItem === secondItem) {
//       result.push(firstItem, secondItem);
//       pointerNums1++;
//       pointerNums2++;
//       continue;
//     }

//     if (firstItem < secondItem) {
//       result.push(firstItem);
//       pointerNums1++;
//     }

//     if (firstItem > secondItem) {
//       result.push(secondItem);
//       pointerNums2++;
//     }
//   }
//   return result;
// }

// console.log(merge(nums1, nums2));


const nums1 = [1, 2, 3, 0, 0, 0]; 
const m = 3;

const nums2 = [2, 5, 6];
const n = 3;

const merge = (nums1, m, nums2, n) => {
    let p1 = m - 1;      // Points to last valid element in nums1
    let p2 = n - 1;      // Points to last element in nums2
    let p = m + n - 1;   // Points to last position in nums1 (where we'll place elements)
    
    // Merge from the end until we've processed all elements from nums2
    while (p2 >= 0) {
        // If p1 is valid and nums1[p1] is greater than nums2[p2]
        if (p1 >= 0 && nums1[p1] > nums2[p2]) {
            nums1[p] = nums1[p1];  // Place nums1 element at position p
            p1--;                   // Move p1 pointer left
        } else {
            nums1[p] = nums2[p2];  // Place nums2 element at position p
            p2--;                   // Move p2 pointer left
        }
        p--;  // Move the insertion pointer left
    }
}

console.log(merge(nums1, m, nums2, n));


