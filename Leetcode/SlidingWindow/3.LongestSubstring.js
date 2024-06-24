// const s = "abcabcbb"
// Output: 3

  // const s = "bbbbb"
// Output: 1

const s = "pwwkew"
// Output: 3


// const lengthOfLongestSubstring = s => {
//   let maxLength = 0;
//   let map = {};
//   let start = 0;
  
//   for (let i = 0; i < s.length; i++) {
//     const current = s[i];

//     if (map[current] >= start) {
//       start = map[current] + 1;
//     }
//     map[current] = i;
//     maxLength = Math.max(maxLength, i - start + 1);
//   }
//   return maxLength;
// };

// console.log(lengthOfLongestSubstring(s));

const longestSub = s => {
  const mapObj = new Set();
  let length = 0;
  let index = 0;
  
  for (let i = 0; i < s.length; i++) {
    const current = s[i];
    
    while (mapObj.has(current)) {
      mapObj.delete(s[index]);
      index++
    }
    mapObj.add(current);
    
    length = Math.max(length, mapObj.size)
  }
  return length;
};

console.log(longestSub(s));

