const str = 'AAAABBBCCXYZDDDDEEEFFFAAAAAABBBBBBBBBBBBBBBBBBBBBBBBBBBB';
// output: A4B3C2XYZD4E3F3A6B28


const compressSrt = (str) => {
  let result = '';
  let count = 1;

  for (let i = 0; i < str.length; i++) {
    if (str[i] !== str[i + 1]) {
      result += `${count === 1 ? '' : count}${str[i]}`
      count = 1;
    } else {
      count++;
    }
  }
  return result;
}

console.log(compressSrt(str));
