const word1 = "abc"; 
const word2 = "xyz"

// Output: "axbycz"

const mergeAlternately = (word1, word2) => {
  let str = '';

  let i = 0;
  let j = 0;

  while (i < word1.length || j < word2.length) {
    str += word1[i] || '';

    i++;

    str += word2[j] || '';

    j++
  }

  return str;
}

console.log(mergeAlternately(word1, word2));