// Дана строка:
// Нужно найти в ней самую длинную подстроку без повторяющихся символов и вернуть ее длину:

const str = "abcabcbb";
// 3

const getLongestSubstringLength = (str) => {

  const hashMap = new Map();
  let count = 0;
  let length = 0;

  for (let i = 0; i < str.length; i++) {
    const current = str[i];

    while (hashMap.has(current)) {
      hashMap.delete(str[count]);
      count++;
    }
    hashMap.set(current, i);

    length = Math.max(length, hashMap.size)
  }
  return length;
}

console.log(getLongestSubstringLength('abcabcbb')); // 3
console.log(getLongestSubstringLength('bbbbb')); // 1
console.log(getLongestSubstringLength('pwwkew')); // 3
