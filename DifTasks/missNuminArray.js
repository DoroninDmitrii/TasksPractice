const arr = [0, 1, 2, 4, 3, 7, 6, 8, 9]

function findMissNum(arr) {
  let arrSort = arr.sort((a, b) => a - b)
  let resArr = [];
  
  for (let i = 0; i < arrSort.length; i++) {
    if (arrSort[i] + 1 !== arrSort[i + 1]) {
      return arrSort[i] + 1
    }
  } 
}

console.log(findMissNum(arr))
