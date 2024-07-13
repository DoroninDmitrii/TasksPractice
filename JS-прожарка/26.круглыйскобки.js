// Нужно проверить строку на правильность расстановки этих самых скобок:
// "(()))()((()))()" // false
// "()(())()(())()" // true


const isValidString = (str) => {

  const stack = [];

  for (let i = 0; i < str.length; i++) {
    const current = str[i];

    if (current === '(') {
      stack.push(current);
    }

    if (current === ')') {
      if (stack.length === 0) {
        return false;
      }
      stack.pop();
    }
  }
  return stack.length === 0;
};

console.log(isValidString('(()))')); // false
// console.log(isValidString('()(())()(())()')); // true
// console.log(isValidString(')(')); // false
