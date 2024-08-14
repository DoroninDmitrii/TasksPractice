const arr = [5, 4, 1, 6, 3, 8];
// output = [1, 4, 3, 6, 5, 8];


// const sortOddNum = (arr) => {

//   const sortArr = arr.filter((el) => el % 2 === 1).sort((a, b) => a - b);

//   let index = 0;
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] % 2 === 1) {
//       arr[i] = sortArr[index];
//       index++;
//     }
//   }
//   return arr
// }

// console.log(sortOddNum(arr));


const sortOddNum = (arr) => {
  const oddArr = [];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 1) {
      oddArr.push(arr[i])
    }
  }
  
  oddArr.sort((a, b) => a - b);

  return arr.map((el) => {
    if (el % 2 === 1) {
      return oddArr.shift();
    }
    return el;
  })
}

console.log(sortOddNum(arr));
