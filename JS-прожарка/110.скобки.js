const isValid = (str) => {

  const stack = [];

  const hashMap = {
    '(': ')',
    '[': ']',
    '{': '}',
  };


  for (let i = 0; i < str.length; i++) {
    const current = str[i];

    if (current in hashMap) {
      stack.push(current);
    } else if (Object.values(hashMap).includes(current)) {
      const last = stack.pop();

      if (hashMap[last] !== current) {
        return false;
      }
    }
  }
  return stack.length === 0;
}


console.log(isValid('(jsgrill)')); // true
// console.log(isValid('(js[!]{!})')); // true
// console.log(isValid('[(js){}(grill)()]')); // true
// console.log(isValid('(jsgrill')); // false - нет закрывающей
// console.log(isValid('{js[!}!]')); // false - скобки пересекаются
