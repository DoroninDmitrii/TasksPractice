const chars = ["a","a","b","b","c","c","c"];

const compress = (chars) => {
  let pointer = 0;
  let i = 0;

  while (i < chars.length) {
    let char = chars[i];
    let count = 0;

    while (i < chars.length && chars[i] === char) {
      i++;
      count++;
    }

    chars[pointer++] = char;

    if (count > 1) {
      for (const c of String(count)) {
        chars[pointer++] = c;
      }
    }
  }
  return pointer;
};

console.log(compress(chars));
