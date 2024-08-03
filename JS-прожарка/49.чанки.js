const chunk = (arr, chunkSize) => {
  const result = [];

  for (let i = 0; i < arr.length; i += chunkSize) {
    result.push(arr.splice(i, i + chunkSize));
  }
  return result;
}


// console.log(chunk([1, 2, 3, 4, 5], 1)); // [[1], [2], [3], [4], [5]]
console.log(chunk([1, 2, 3, 4, 5], 2)); // [[ 1, 2 ], [ 3, 4 ], [ 5 ]]
// console.log(chunk([1, 2, 3, 4, 5], 3)); // [[ 1, 2, 3 ], [ 4, 5 ]]
// console.log(chunk([1, 2, 3, 4, 5], 6)); // [[ 1, 2, 3, 4, 5 ]]
// console.log(chunk([], 1)); // []
