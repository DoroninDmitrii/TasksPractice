const sumQuery = (nums, queries) => {
  return queries.map(([start, end]) => {
    let sum = 0;

    for (let i = start; i <= end; i++) {
      sum += nums[i];
    }

    return sum;
  });
};

console.log(sumQuery([-2, 0, 3, -5, 2, -1], [[0, 2], [2, 5], [0, 5]]));
// [1, -1, -3]

