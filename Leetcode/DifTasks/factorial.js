// let num = 5

// const factorial = (num) => {
//   let arr = [];
  
//   for (let i = 0; i <= num; i++) {
//     arr.push(i)
//   }
//   let res = arr.filter((el) => el > 0)
//   return res.reduce((total, item) => {
//     return total * item
//   }, 1)
// }

// console.log(factorial(num))

let num = 3

const factorial = (num) => {
  if (num === 0) {
    return 1
  } else {
    return num * factorial(num - 1)
  }
}

console.log(factorial(num))

// factorial(3) = 3 * factorial(2)
// factorial(2) = 2 * factorial(1)
// factorial(1) = 1 * factorial(0)


// factorial(0) = 1;
// factorial(1) = 1 * 1 = 1;
// factorial(2) = 1 * 2 = 2;
// factorial(3) = 2 * 3 = 6;
