// const fibonacci = (num) => {
//   if (num <= 1) {
//     return 1
//   } else {
//     return fibonacci(num - 1) + fibonacci(num - 2)
//   }
// }


// console.log(fibonacci(5))

function fibonacci(num) {
  let a = 1
  let b = 1;
  
  for (let i = 3; i <= num; i++) {
    let c = a + b
    // console.log(a, b, 'c----------------------------')
            a = b
            b = c
  }
  
  return b
 }
 
 console.log(fibonacci(5))
