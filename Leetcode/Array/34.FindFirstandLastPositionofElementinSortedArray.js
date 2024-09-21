const nums = [5, 7, 7, 8, 8, 10];
const target = 8;
// Output: [3,4]

const searchRange = function (nums, target) {

  const findFirst = (nums, target) => {
    let left = 0;
    let right = nums.length - 1;
    let first = -1;

    while (left <= right) {
      let mid = Math.round((right - left) / 2 + left);

      if (target === nums[mid]) {
        first = mid;
        right = mid - 1;
      } else if (target < nums[mid]) {
        right = mid - 1;
      } else {
        left = mid + 1;
      }
    }
    return first;
  }

  const findLast = (nums, target) => {
    let left = 0;
    let right = nums.length - 1;
    let last;

    while (left <= right) {
      let mid = Math.round((right - left) / 2 + left);

      if (target === nums[mid]) {
        last = mid;
        left = mid + 1;
      } else if (nums[mid] < target) {
        left = mid + 1;
      } else {
        right = right - 1;
      }
    }
    return last;
  }

  let first = findFirst(nums, target);

  if (first === -1) {
    return [-1, -1];
  }

  let last = findLast(nums, target);

  return [first, last];
};

console.log(searchRange(nums, target));
