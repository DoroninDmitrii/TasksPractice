const arr = [5, 2, 1, 3, 9, 0, 4, 6, 8, 8, 7];


const bubbleSort = (arr) => {

  for (let i = 0; i < arr.length; i++) {
    for (let k = 0; k < arr.length; k++) {
      if (arr[k + 1] <  arr[k]) {
        let temp = arr[k];
        arr[k] = arr[k + 1];
        arr[k + 1] = temp;
      }
    }
  }
  return arr;
}

console.log(bubbleSort(arr));
