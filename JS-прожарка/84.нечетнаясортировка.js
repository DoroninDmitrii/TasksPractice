const sortOdd = (arr) => {
  const filteredArr = arr.filter((el) => el % 2 === 1).sort((a, b) => a - b);
  
  let index = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 1) {
      arr[i] = filteredArr[index];
      index++;
    }
  }
  return arr;
}


console.log(sortOdd([2, 3, 1, 7, 4, 9, 5, 8])); // [2, 1, 3, 5, 4, 7, 9, 8]
// console.log(sortOdd([1, 2])); // [1, 2]
