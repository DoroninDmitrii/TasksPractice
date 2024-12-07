const findLongestWord = (str) => {
  const array = str.replace(/[, ]+/g, ', ').split(', ');
  
  let longestWord = array[0];
  
  for (let i = 1; i < array.length; i++) {
    const current = array[i];

    if (longestWord.length < current.length) {
      longestWord = current;
    }
  }
  return longestWord;
}

console.log(findLongestWord("Решай, выбирай, получай оферы")); // "выбирай"
console.log(findLongestWord("JS Прожарка")); // "Прожарка"
