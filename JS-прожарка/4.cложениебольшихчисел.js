const arg1 = '90071992547409918889';
const arg2 = '1489';

const sumBigInt = (arg1, arg2) => {
  const delta = arg1.length - arg2.length - 2;
  let num = arg1.slice(delta);
  let sum = +num + +arg2;

  return arg1.slice(0, delta) + String(sum);
};

console.log(sumBigInt(arg1, arg2));
