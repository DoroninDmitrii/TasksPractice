const getReversedNumber = (num) => {
  let stack = [];

  let arrNum = String(num).split('');

  for (let i = arrNum.length - 1; i >= 0; i--) {
    const current = arrNum[i];

    if (current === '-') {
      stack.unshift(current);
    } else {
      stack.push(current);
    }
  }
  return Number(stack.join(''));
}


console.log(getReversedNumber(12)); // 21
console.log(getReversedNumber(-123)); // -321
