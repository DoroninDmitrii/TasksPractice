const nums = [1,0,1,2];

const sortColors = (nums) => {
  let zero = 0;
  let one = 0;

  for (let two = 0; two < nums.length; two++) {
      let tmp = nums[two];
      nums[two] = 2;

      if (tmp < 2) {
        nums[one] = 1;
        one++;
      }

      if (tmp < 1) {
        nums[zero] = 0;
        zero++;
      }
  }
}

console.log(sortColors(nums));