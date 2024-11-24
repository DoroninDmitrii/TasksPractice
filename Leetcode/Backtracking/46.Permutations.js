const nums = [1,2,3];

const permute = function (nums) {
  const result = [];

  const backtrack = (path, used) => {

    if (path.length === nums.length) {
      result.push([...path]);
      return;
    }

    for (let i = 0; i < nums.length; i++) {
      if (used[i]) continue;

      path.push(nums[i]);
      used[i] = true;

      backtrack(path, used);

      path.pop();

      used[i] = false;
    }
  }

  backtrack([], Array(nums.length).fill(false));

  return result;
};

console.log(permute(nums)); 
// [[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]]


