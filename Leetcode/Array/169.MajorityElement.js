 const nums = [5,5,1,1,1,5,5];

// Output: 5
 
// const majorityElement = (nums) => {
//     const hashMap = {};
//     let res = 0;
//     let maxCount = 0;

//     for (let i = 0; i < nums.length; i++) {
//         const current = nums[i];
//         hashMap[current] ? hashMap[current] += 1 : hashMap[current] = 1;

//         if (hashMap[current] > maxCount) {
//             res = current;
//             maxCount = hashMap[current];
//         }
//     }
//     return maxCounts;
// }

//  console.log(majorityElement(nums));

const majorityElement = (nums) => {
    const hashMap = {};
    const threshold = Math.floor(nums.length / 2);

    for (let i = 0; i < nums.length; i++) {
        const current = nums[i];
        hashMap[current] ? hashMap[current] += 1 : hashMap[current] = 1;

        if (hashMap[current] > threshold) {
            return current;
        }
    }
}

 console.log(majorityElement(nums));