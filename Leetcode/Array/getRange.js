let arr = [1, 2, 3, 4, 5, 7, 8, 9, 12, 13];

const getRange = arr => {
  let result = [];
  let start = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] + 1 !== arr[i + 1]) {
      if (arr[start] === arr[i]) {
        result.push(arr[i]);
      } else {
        result.push(`${arr[start]}-${arr[i]}`);
      }
      start = i + 1;
    }
  }
  return result;
};

console.log(getRange(arr));
