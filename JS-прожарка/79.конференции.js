const findCommonCharacters = (words) => {
  const firstWord = words[0];
  const secondWord = words[1];

  const hashMap = {};
  let result = [];

  for (let i = 0; i < firstWord.length; i++) {
    const curr = firstWord[i];

    hashMap[curr] ? hashMap[curr] += 1 : hashMap[curr] = 1;
  }

  for (let i = 0; i < secondWord.length; i++) {
    const curr = secondWord[i];

    if (hashMap[curr]) {
      hashMap[curr]--;
    }
  }
  
  for (let key in hashMap) {
    if (hashMap[key] === 0) {
      result.push(key);
    }
  }
  return result;
}

console.log(findCommonCharacters(['holyjs', 'highload'])); // [ 'h', 'o', 'l' ]
