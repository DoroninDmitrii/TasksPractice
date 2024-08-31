// const tokens = ["2", "1", "+", "3", "*"];
const tokens = ["4","13","5","/","+"];
// Output: 9
// Explanation: ((2 + 1) * 3) = 9

const evalRPN = function (tokens) {
  let stack = [];
  
  let set = new Set(['+', '-', '*', '/']);

  for (let i = 0; i < tokens.length; i++) {
    let token = tokens[i];

    if (set.has(token)) {
      let secondNum = stack.pop();
      let firstNum = stack.pop();

      if (token === '+') {
        stack.push(firstNum + secondNum);
      } else if (token === '-') {
        stack.push(firstNum - secondNum);
      } else if (token === '*') {
        stack.push(firstNum * secondNum);
      } else if (token === '/') {
        stack.push(Math.trunc(firstNum / secondNum));
      }
    } else {
      stack.push(Number(token));
    }
  }
  return Math.floor(stack.pop());
};

console.log(evalRPN(tokens));
