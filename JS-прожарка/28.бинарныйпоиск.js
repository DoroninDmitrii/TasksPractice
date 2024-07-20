let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];


let BinarySearch = function (arr, target) {
  let left = 0;
  let rigth = arr.length - 1;
  let mid;

  while (left <= rigth) {
    mid = Math.round((rigth - left) / 2) + left;

    if (target === arr[mid]) {
      return mid;
    }

    if (arr[mid] > target) {
      rigth = mid - 1;
    } else {
      left = mid + 1;
    }
  }
  return -1;
}


console.log(BinarySearch(arr, 5));
