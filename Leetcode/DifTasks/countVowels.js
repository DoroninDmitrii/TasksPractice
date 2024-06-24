// const str = 'hello';
const str = 'hll';
const arr = ['a', 'e', 'i', 'o', 'u'];

function findOl(str, arr) {
  str = str.split('')
  for (let i = 0; i < str.length; i++) {
    if (str[i].includes(arr[i])) {
      return true
    }
  }
  return false
}

console.log(findOl(str, arr))


function findVowels(arg) {
  const vowels = ['a', 'e', 'i', 'o', 'u'];
  let count = 0;
  for (let i = 0; i < arg.length; i++) {
    if (vowels.includes(arg[i])) {
      count += 1
    }
  }
  return count
}

console.log(findVowels(word));

function findVowels(arg) {
  const matched = arg.match(/[aeiou]/gi)
  return matched ? matched.length : 0
}

console.log(findVowels(word));
