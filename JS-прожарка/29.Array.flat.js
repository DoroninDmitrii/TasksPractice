
// // recustion
// const flattenArray = (arr) => {
//   const stack = [];

//   for (let i = 0; i < arr.length; i++) {
//     const current = arr[i];

//     if (typeof current === 'number') {
//       stack.push(current)
//     } else if (typeof current === 'object') {
//       stack.push(...flattenArray(current));
//     }
//   }
//   return stack;
// };

// console.log(flattenArray([1, [10, 12], [[2, 4], 7], 190]));
// // [1, 10, 12, 2, 4, 7, 190]

const flattenArray = (arr) => {
  const result = [];
  const stack = [...arr];

  while (stack.length > 0) {
    const current = stack.pop();

    if (typeof current === 'object') {
      stack.push(...current)
    } else {
      result.push(current);
    }
  }
  return result.reverse();
};

console.log(flattenArray([1, [10, 12], [[2, 4], 7], 190]));
// [1, 10, 12, 2, 4, 7, 190]
