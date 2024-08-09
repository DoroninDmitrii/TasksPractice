const limitFnCall = (fn, limit) => {
  let countCall = 0;
  
  return (...args) => {
    if (countCall !== limit) {
      countCall++;
      return fn(...args);
    }
    return undefined;
  }
}

const callOnce = limitFnCall((a, b, c) => (a + b), 1);
console.log(callOnce(1, 2)); // 3
console.log(callOnce(3, 4)); // undefined

// const callTwice = limitFnCall((a, b, c) => (a * b), 2);
// console.log(callTwice(1, 2)); // 2
// console.log(callTwice(3, 4)); // 12
// console.log(callTwice(5, 6)); // undefined
