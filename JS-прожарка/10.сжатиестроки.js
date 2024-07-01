
const str = 'AAAABBBCCXYZDDDDEEEFFFAAAAAABBBBBBBBBBBBBBBBBBBBBBBBBBBB';
// A4B3C2XYZD4E3F3A6B28

const compressString = (str) => {

  let pointer = 1;
  let result = '';

  for (let i = 0; i < str.length; i++) {

    if (str[i] === str[i + 1]) {
      pointer++
    } else {
      result += `${pointer === 1 ? '' : pointer}${str[i]}`;
      pointer = 1;
    }
  }
  return result;
}

console.log(compressString(str));
