const arr = [1, [2], [3, [4]]];

function flat(arr, depth = 1) {
  let result = [];

  for (let i = 0; i < arr.length; i++) {
    const current = arr[i];

    if (Array.isArray(current) && depth > 0) {
      result.push(...flat(current, depth - 1));
    } else {
      result.push(current);
    }
  }
  return result;
}


console.log(flat(arr, 1));
