// const arrayJoin = (delimiter, arr) => {
//   const result = [];

//   for (let i = 0; i < arr.length; i++) {
//     const curr = arr[i];

//     if (curr !== arr[arr.length - 1]) {
//       result.push(curr + delimiter);
//     } else {
//       result.push(arr[arr.length - 1]);
//     }
//   }
//   return result.join('');
// }

// console.log(arrayJoin('!', [2, 0, 'jsgrill', -11])); // '2!0!jsgrill!-11'

const arrayJoin = (delimiter, arr) => {
  return arr.reduce((acc, item, idx) => acc + `${!idx ? '' : delimiter}${item}`, '');
}

console.log(arrayJoin('!', [2, 0, 'jsgrill', -11])); // '2!0!jsgrill!-11'
