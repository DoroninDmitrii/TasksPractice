const filter = (arr, fn) => {
  let result = [];

  arr.map((element) => {
    if (fn(element)){
      result.push(element);
    }
  })
  return result;
}

console.log(filter([0, 10, 20, 30], (n) => n > 10)); // [20, 30]
// console.log(filter([-2, -1, 0, 1, 2], (n) => n + 1)); // [-2, 0, 1, 2]
// console.log(filter([1, 2, 3], (n, i) => i === 0)); // [1]
