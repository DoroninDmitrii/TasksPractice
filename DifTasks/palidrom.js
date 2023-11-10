function palindrom(str) {
  str = str.toLowerCase().replace(/\s/g,'');
  return str === str.split('').reverse().join('');
}

console.log(palindrom('racecar'))
console.log(palindrom('Anna'))
console.log(palindrom('А роза упала на лапу Азора'))

function palindrom(str) {
  const len = Math.floor(str.length / 2);
  for (let i = 0; i < len; i++) {
    if (str[i] !== str[str.length - i - 1]) {
      console.log(str[i])
      return false;
    }
  }
  return true;
}

console.log(palindrom('racecar'));

function palindrom(arg) {
  let reverseWord = []
  for (let i = arg.length; i >= 0; i--) {
  reverseWord.push(arg[i]) 
  }
  return arg === reverseWord.join('') ? true : false
}

console.log(palindrom(word))

function palindrom(str) {
    if (str.length < 1) 
    return true;
    if (str[0] !== str[str.length-1]) 
    return false;
    return palindrom(str.substr(1, str.length-2));
}

console.log(palindrom(word))
