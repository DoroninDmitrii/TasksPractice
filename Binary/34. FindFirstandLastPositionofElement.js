const nums = [5, 7, 7, 8, 8, 10];
const target = 8;
// Output: [3,4]

const findFirstOccurance = (nums, target) => {

  let left = 0;
  let right = nums.length - 1;
  let firstOccurance;

  while (left <= right) {
    let mid = Math.round((right - left) / 2) + left;

    if (nums[mid] === target) {
      firstOccurance = mid;
      right = mid - 1;
    } else if (target < nums[mid]) {
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }
  return firstOccurance;
}

// console.log(findFirstOccurance(nums, target));

const findSecondOccurance = (nums, target) => {

  let left = 0;
  let right = nums.length - 1;
  let secondOccurance;

  while (left <= right) {
    let mid = Math.round((right - left) / 2) + left;

    if (nums[mid] === target) {
      secondOccurance = mid;
      left = mid + 1;
    } else if (target < nums[mid]) {
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }
  return secondOccurance;
}

console.log(findSecondOccurance(nums, target));

const searchRange = (nums, target) => {
  return [findFirstOccurance(nums, target), findSecondOccurance(nums, target)];
}

// console.log(searchRange(nums, target));
