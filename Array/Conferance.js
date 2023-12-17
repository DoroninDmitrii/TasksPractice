const findCommonCharacters = words => {
  let wordsCopy = words.concat();
  
  const commonChars = [];
  
  for (const char of words[0]) {
    if (wordsCopy.every(word => word.includes(char))) {
      wordsCopy = wordsCopy.map(word => word.replace(char, ''))
      console.log(wordsCopy)
      commonChars.push(char);
    }
  }
  return commonChars;
};

console.log(findCommonCharacters(['holyjs', 'highload']));
