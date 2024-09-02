const shiftArr = (arr, step) => {
  
  let spliceArr = arr.splice(step);
  return [...spliceArr, ...arr];
}

console.log(shiftArr([1, 2, 3, 4, 5], 2)); // [4, 5, 1, 2, 3]
console.log(shiftArr([1, 2, 3, 4, 5], -2)); // [3, 4, 5, 1, 2]
