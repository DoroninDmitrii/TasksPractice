const generateAllCombinations = (nums) => {
  const result = [];

  function backtrack(start, currentSubset) {
    result.push([...currentSubset]);

    for (let i = start; i < nums.length; i++) {
      currentSubset.push(nums[i]);

      backtrack(i + 1, currentSubset);

      currentSubset.pop();
    }
  }
  backtrack(0, []);
  
  return result;
}


console.log(generateAllCombinations([1, 2]));
// [[], [1], [2], [1, 2]]

// console.log(generateAllCombinations([1, 2, 3]));
// [[], [1], [2], [1, 2], [3], [1, 3], [2, 3], [1, 2, 3]]
