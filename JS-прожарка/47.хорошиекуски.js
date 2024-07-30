// Нужно посчитать все подстроки 
// в которых нет повторяющихся символов, 
// а длина самой подстроки равна трем:

const countValidSubstring = (str) => {

  let count = 0;

  for (let i = 0; i <= str.length - 3; i++) {
    const substring = str.slice(i, i + 3);

    if (isUnique(substring)) {
      count++;
    }

  }
  return count;
}

const isUnique = (substring) => {
  const charSet = new Set();

  for (char of substring) {
    if (charSet.has(char)) {
      return false;
    }
    charSet.add(char);
  }
  return true;
};


console.log(countValidSubstring('xyzzaz')); // 1
console.log(countValidSubstring('aababcabc')); // 4
console.log(countValidSubstring('')); // 0
console.log(countValidSubstring(' ')); // 0
