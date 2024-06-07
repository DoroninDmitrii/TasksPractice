const arr = [1, 2, 3, 4, 5, 6, 7, 7, 8, 6, 6, 10, 10];

function findDouble(arr) {
  const arrObj = {};

  for (let i = 0; i < arr.length; i++) {
    if (arrObj[arr[i]]) {
      arrObj[arr[i]] = arrObj[arr[i]] + 1;
    } else {
      arrObj[arr[i]] = 1
    }
  }
  let result = Object.keys(arrObj).filter(item => arrObj[item] > 1)
  return result
  
}

console.log(findDouble(arr));


function findDouble(arr) {
  let resObj = {};
  let resArr = [];

  for (let i = 0; i < arr.length; i++) {
    if (resObj[arr[i]]) {
      if (resObj[arr[i]] === 1) {
        resArr.push(arr[i]);
      }
      resObj[arr[i]] = resObj[arr[i]] + 1;
    } else {
      resObj[arr[i]] = 1;
    }
  }
  return resArr;
}

console.log(findDouble(arr));
