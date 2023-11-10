const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let randomArray = function (arr) {
  for (let i = arr.length - 1; i > 0; i--) {
    let tmp = arr[i];
    let rnd = Math.floor(Math.random() * (i + 1))

    arr[i] = arr[rnd]
    arr[rnd] = tmp
  }
  return arr
}

console.log(randomArray(arr));


let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let shuffle = function(arr) {
  let mapping = arr.map((item, index) => {
    return [item, Math.random()]
  })
  let sorting = mapping.sort((a, b) => {
    return a[1] - b[1]
  })
  let mappingAgaing = sorting.map((item) => {
    return item[0]
  })
  // console.log(mapping)
  // console.log(sorting)
  // console.log(mappingAgaing)
  return mappingAgaing
};

// console.log(shuffle(arr));

for (let i = 1; i < 10; i++) {
  console.log(shuffle(arr))
}
