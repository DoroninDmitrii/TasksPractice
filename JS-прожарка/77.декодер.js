const decodeString = (str) => {

  let stack = [];
  let currStr = '';
  let currNum = 0;
  
  for (let i = 0; i < str.length; i++) {
    if (str[i] === '(') {
      stack.push(currStr);
      stack.push(currNum);
      currStr = '';
      currNum = 0;
    } else if (str[i] === ')') {
      let prevNum = stack.pop();
      let prevStr = stack.pop();
      currStr = prevStr + currStr.repeat(prevNum); 
    } else if (str[i] >= '0' && str[i] <= '9') {
      currNum = currNum + Number(str[i]);
    } else {
      currStr += str[i];
    }
  }
  return currStr;
}

console.log(decodeString('3(a)2(bc)')); // aaabcbc
// console.log(decodeString('3(a2(c))')); // accaccacc
// console.log(decodeString('2(abc)3(cd)ef')); // abcabccdcdcdef
