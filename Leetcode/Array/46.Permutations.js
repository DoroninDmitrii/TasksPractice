const nums = [1,2,3];
// Output: [[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]]

const permute = (nums) => {
    let result = [];

    if (nums.length === 0) return [];
    if (nums.length === 1) return [nums];

    for (let i = 0; i < nums.length; i++) {
      const current = nums[i];
      const remaniningNums = nums.slice(0, i).concat(nums.slice(i + 1));
      const remainingNumsPermuted = permute(remaniningNums);

      for (let k = 0; k < remainingNumsPermuted.length; k++) {
        const permutedArray = [current].concat(remainingNumsPermuted[k]);

        result.push(permutedArray);
      }
    }

    return result;
};

console.log(permute(nums));
