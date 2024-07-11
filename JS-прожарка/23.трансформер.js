// Нужно написать функцию, которая принимает на вход два числа.
// Если оба четные, то следует их перемножить. 
// Если нечетные, то сложить.
// А если микс, то вернуть нечетное.

const transform = (a, b) => {
  let bothEven = a % 2 === 0 && b % 2 === 0;
  let bothOdd = a % 2 !== 0 && b % 2 !== 0;
  
  if (bothEven) {
    return a * b;
  }

  if (bothOdd) {
    return a + b;
  }

  if (a % 2 !== 0) {
    return a;
  }

  if (b % 2 !== 0) {
    return b;
  }
}

console.log(transform(2, 8)); // 16
console.log(transform(1, 3)); // 4
console.log(transform(1, 10)); // 1
console.log(transform(4, 49)); // 49
