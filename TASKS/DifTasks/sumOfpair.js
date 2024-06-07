const arr = [1, 2, 3, 4, 5];

function findDouble(arr) {
  let result = [arr[0]];
 
 for (let i = 1; i < arr.length; i++) {
   result.push(arr[i] + result[i - 1])
 }
 return result
}

console.log(findDouble(arr));


function sumArr(arr) {
  
  let arrRes = [arr[0]];
  let res = [arr[0]];
  
  for (let i = 1; i < arr.length; i++) {
    arrRes = Number(arrRes) + arr[i]
    res.push(arrRes)
  }
  return res
}

console.log(sumArr(arr))
