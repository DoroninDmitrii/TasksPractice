let arr = [4, 1, 2, 1, 2];

function uniqNum(arr) {
  let arrRes = [];
  let arrSort = arr.sort((a, b) => a - b);

  for (let i = 0; i < arrSort.length; i = i + 2) {
    if (arrSort[i] !== arrSort[i + 1]) {
      arrRes.push(arrSort[i]);
    }
  }
  return arrRes
}
console.log(uniqNum(arr));
