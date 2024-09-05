const createCounter = (start = 0) => {
  let value = start;

  function inner() {
   return value++;
  }
  return inner;
}

const counterOne = createCounter(10);
console.log(counterOne()); // 10
console.log(counterOne()); // 11
console.log(counterOne()); // 12

// const counterTwo = createCounter(-2);
// console.log(counterTwo()); // -2
// console.log(counterTwo()); // -1
// console.log(counterTwo()); // 0
// console.log(counterTwo()); // 1
// console.log(counterTwo()); // 2
