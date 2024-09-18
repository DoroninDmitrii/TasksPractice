const nums = [-1, 2, 1, -4];
const target = 1;


const threeSumClosest = (nums, target) => {
  const numsSort = nums.sort((a, b) => a - b);
  let diff = Infinity;

  for (let i = 0; i < numsSort.length - 2; i++) {
    let j = i + 1;
    let k = nums.length - 1;

    while (j < k) {
      let sum = numsSort[i] + numsSort[j] + numsSort[k];

      if (Math.abs(diff) > Math.abs(target - sum)) {
        diff = target - sum;
      }

      if (sum < target) {
        j++;
      } else {
        k--;
      }
    }
  }
  return target - diff;
};

console.log(threeSumClosest(nums, target));
