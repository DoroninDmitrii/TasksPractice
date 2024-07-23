// Есть функция вида:
// sum(5)(-1)(5)(); 
// 9

function sum(value) {
  let total = value ?? 0;

  function innerSum(args) {
      total += args ?? 0;

      return innerSum;
    }

  innerSum.toString = function () {
    return total;
  }

  return innerSum;
};


console.log(Number(sum(5)(-1)(5)())); // 9
console.log(Number(sum(2)(1)()()()()(10)()(-100)())); // -87
// sum(); --> 0
