const nums = [1, 1, 2, 3, 3, 4]

// The time complexity is O(N) and, space complexity is O(1).

function RemoveDuplicate(nums) {
  
  if (nums.length === 0) return 0

  let index = 0

  for (let k = 0; k < nums.length; k++) {
    if (nums[k] !== nums[index]) {
      nums[index] = nums[k]
      index++
    }
  }
  return index + 1
}

console.log(RemoveDuplicate(nums))

