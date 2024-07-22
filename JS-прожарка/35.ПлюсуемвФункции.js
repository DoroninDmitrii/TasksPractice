// Есть функция вида:
// sum(5)(-1)(5)(); 
// 9

function sum(value) {
  let total = value;

  function innerSum(args) {
    if (args === undefined) {
      return total;
    } else {
      total += args;

      return innerSum;
    }
  }
  return innerSum;
};


console.log(sum(5)(-1)(5)()); // 9
// sum(2)(1)()()()()(10)()(-100); --> -87
// sum(); --> 0
