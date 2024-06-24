function curry(fn) {

  return function curried(...args) {
    if (args.length >= fn.length) {
      return fn(...args);
    } else {
      return function (...nextArgs) {
        return curried(...args, ...nextArgs)
      }
    }
  }
}

const sum = (a, b, c) => a + b + c;
const curriedSum = curry(sum);

// console.log(curriedSum(1)(2)(3)); // 6
// console.log(curriedSum(1, 2)(3)); // 6
// console.log(curriedSum(1)(2, 3)); // 6
// console.log(curriedSum(1, 2, 3)); // 6
