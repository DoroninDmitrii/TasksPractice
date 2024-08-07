const nums = [100,4,200,1,3,2]
// Output: 4

const longestConsecutive = (nums) => {
    let set = new Set(nums);
    let longestCons = 0;

    for (let num of set) {
      if (set.has(num - 1)) {
        continue;
      }

      let current = 1;

      while (set.has(num + 1)) {
        current++;
        num++;
      }
      longestCons = Math.max(longestCons, current);
    }
    return longestCons;
};

console.log(longestConsecutive(nums));
