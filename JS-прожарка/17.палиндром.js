// const str = "топот"; // true
const str = "22.02.2022"; // true
// const str = "абвгвбж"; // false

const palindrom = (str) => {
  let pointer = str.length - 1;

  for (let i = 0; i < str.length / 2; i++) {
    if (str[i] !== str[pointer]) {
      return false
    } else {
      pointer--;
    }
    return true;
  }
}

console.log(palindrom(str));
