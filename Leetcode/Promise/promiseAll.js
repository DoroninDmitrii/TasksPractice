// const promiseAll = promises => {
//   return new Promise((resolve, reject) => {
//     let result = [];
//     let index = 0;
    
//     for (let i = 0; i < promises.length; i++) {
//       promises[i].then((data) => {
//         result[i] = data
//         index++
        
//         if (result.length === index) {
//           resolve(result)
//         }
//       }).catch(err => reject(err)) 
//     }
//   })

// };

// promiseAll([
// 	new Promise((resolve) => {
// 		setTimeout(() => resolve('foo'), 5000)
// 	}),

// 	new Promise((resolve) => {
// 		setTimeout(() => resolve('bar'), 1000);
// 	}),
// 		new Promise((resolve) => {
// 		setTimeout(() => resolve('bar2'), 2000);
// 	}),
// ])
// 	.then((res) => console.log('RESOLVED: ', res))
// 	.catch((err) => console.log('REJECTED: ', err));


const promise = new Promise((resolve, reject) => {
  a += 3
  console.log(a)
  resolve(a)
})
.catch(e => {
  return a
})

setTimeout(() => {
  console.log(++a)
})

promise.then(value => {
  const result = value + 5
  console.log(result)
  return result
})

let a = 1
