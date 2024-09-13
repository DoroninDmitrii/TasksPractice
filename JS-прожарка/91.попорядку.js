const getLongestSubsequenceCount = (nums) => {
  let subsequenceLength = 0;
  let longest = 0;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] + 1 === nums[i + 1]) {
      subsequenceLength++;
    } else {
      if (subsequenceLength > longest) {
        longest = subsequenceLength;
      }
      subsequenceLength = 0;
    }
  }
  return longest === 0 ? 0 : longest + 1;
}


console.log(getLongestSubsequenceCount([2, 3, 1, 2, 7, 5])); // 2
// console.log(getLongestSubsequenceCount([2, 3, 1, 2, 3, 5])); // 3
// console.log(getLongestSubsequenceCount([2, 4, 8, 2, 7, 5])); // 0
// console.log(getLongestSubsequenceCount([])); // 0
