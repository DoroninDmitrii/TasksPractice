const times = (y) => (x) => x * y
const plus = (y) => (x) => x + y
const subtract = (y) => (x) => x - y
const divide = (y) => (x) => x / y


const pipe = (...fns) => (x) => {
  return fns.reduce((acc, fn) => {
    return fn(acc);
  }, x)
}

console.log(pipe(
  ...[
    times(2),
    subtract(3),
    divide(4)
  ])(1))
