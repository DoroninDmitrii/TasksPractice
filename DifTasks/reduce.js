// const euros = [29.76, 41.85, 46.5];

// const average = euros.reduce((total, amount, index, array) => {
//   total += amount
  
//   if (index === array.length - 1) {
//     return total / array.length
//   } else {
//   return total
//   }
// })

// console.log(average)

// const doubled = euros.reduce((total, amount) => {
//   total.push(amount * 2);
//   return total;
// }, []);

// console.log(doubled) 

const fruitBasket = ['banana', 'cherry', 'orange', 'apple', 'cherry', 'orange', 'apple', 'banana', 'cherry', 'orange', 'fig' ];


let res = fruitBasket.reduce((tally, fruit) => {
  if (!tally[fruit]) {
    tally[fruit] = 1;
  } else {
    tally[fruit] = tally[fruit] + 1;
  }
  return tally;
}, {});
console.log(res)

const data = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];

const flat = data.reduce((total, amount) => {
  return total = total.concat(amount)
})

console.log(flat)
