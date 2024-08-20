const sum = (arg) => {
  let sum = arg || 0;

  return function innerSum(args) {
    if (args === undefined) {
      return sum;
    }
    sum += args;
    return innerSum;
  }
}


// console.log(sum()); // 0 
// console.log(sum(1)()); // 1
// console.log(sum(2)(2)()); // 4
console.log(sum(2)(2)(4)()); // 8
