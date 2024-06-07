let arr = ['header', 'menu', 'menu', 'menu', 'menu', 'menu-item', 'menu-item', 'menu-item', 'footer', 'menu', 'link', 'link', 'link', 'link']

function uniqArr(arr) {
  let resObj = {};

  for (let i = 0; i < arr.length; i++) {
    if (resObj[arr[i]]) {
      resObj[arr[i]] = resObj[arr[i]] + 1
    } else {
      resObj[arr[i]] = 1
    }
  }
  let resArr = [];
  let obj = Object.entries(resObj)
  let result = obj.sort((a, b) => {
    return b[1] - a[1]
  })
  for (let i = 0; i < result.length; i++) {
    resArr.push(result[i][0])
  }
  return resArr
}


console.log(uniqArr(arr))
