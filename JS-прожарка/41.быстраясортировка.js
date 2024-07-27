const quickSort = (arr) => {  
  if (arr.length <= 1) {
    return arr;
  }

  const pivot = arr[Math.floor(arr.length / 2)];
  const left = [];
  const rigth = [];

  for (let i = 0; i < arr.length; i++) {
    if (i === Math.floor(arr.length / 2)) {
      continue;
    }

    if (arr[i] < pivot) {
      left.push(arr[i]);
    } else {
      rigth.push(arr[i]);
    }
  }
  return [...quickSort(left), pivot, ...quickSort(rigth)];
}


console.log(quickSort([2, 8, 1, 9, 6, 9, 10, 20, 0]));
// [0, 1, 2, 6, 8, 9, 9, 10, 20]
