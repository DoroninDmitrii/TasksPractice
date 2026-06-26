const nums = [1,2,3,4,5,6,7,8]; 
const k = 4;

// Output: [5,6,7,8,1,2,3,4]

const rotate = (nums, k) => {
  const n = nums.length;
  k %= n;

  const reverse = (left, rigth) => {
    while (left < rigth) {
      [nums[left], nums[rigth]] = [nums[rigth], nums[left]];
      left++;
      rigth--;
    }
  }
    reverse(0, n - 1);
    reverse(0, k - 1);
    reverse(k, n - 1);
}

rotate(nums, k);
console.log(nums);