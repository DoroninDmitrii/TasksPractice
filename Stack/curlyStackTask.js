// let s1 = '()';
// let s2 = '()[]{}';
// let s3 = '(]';
let s4 = '{[]}';
// let s5 = '([)]';
// let s6 = '{[[]{}]}()()'

// const isValid = (s) => {
//   let stack = [];

//   let brakets = {
//     ')': '(',
//     '}': '{',
//     ']': '[',
//   };

//   for (let i = 0; i < s.length; i++) {
//     let current = s[i];
//     if (isClosedBracket(current)) {
//       if (brakets[current] !== stack.pop()) return false
//     } else {
//       stack.push(current)
//     }
//   }
//   return stack.length === 0
// };

// function isClosedBracket(ch) {
//   if (ch === ')' || ch === ']' || ch === '}') {
//     return true;
//   } else {
//     return false;
//   }
// }

// console.log(isValid(s4));

// console.log(isValid(s1))
// console.log(isValid(s2))
// console.log(isValid(s3))
// console.log(isValid(s4))
// console.log(isValid(s5))
// console.log(isValid(s6))


function isValid(s) {

  const stack = []

  let brackets = {
    ')': '(',
    ']': '[',
    '}': '{'
  }

  for (const current of s) {
    if (current in brackets) {
      if (brackets[current] !== stack.pop())
        return false
    } else {
      stack.push(current)
    }
  }
  return !stack.length
}

console.log(isValid(s4))




