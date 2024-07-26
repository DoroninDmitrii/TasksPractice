const maxSum = (arr) => {
  return arr.reduce((acc, el) => {
    let arr = acc + Math.max(...el) < 0 ? acc + Math.min(...el) : acc + Math.max(...el);
    return arr;
  }, 0)
}

console.log(
  maxSum([
    [1],
    [4, 8],
    [1, 5, 3]
  ])
); // 14

console.log(
  maxSum([
    [1],
    [-3, -4],
    [2, 1, 9]
  ])
); // 6
