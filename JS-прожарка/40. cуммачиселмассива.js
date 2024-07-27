const sum = (arr) => {
  let sumValue = 0;

  for (let i = 0; i < arr.length; i++) {
    if (typeof arr[i] === 'number') {
      sumValue += arr[i];
    } else if (Array.isArray(arr[i])) {
      sumValue += sum(arr[i]);
    } else if (typeof arr[i] === 'string') {
      let parseValue = parseInt(arr[i]);

      if (!isNaN(parseValue)) {
        sumValue += parseValue;
      }
    }
  }
  return sumValue;
}


console.log(sum([1, 2, '3x'])); // 6
console.log(sum([1, 2, 'x3'])); // 3
console.log(sum([1, [1, [2]], 2])); // 6
