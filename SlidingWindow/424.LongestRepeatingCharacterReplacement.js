const s = "AABABBA";
const k = 1;
// Output: 4

const characterReplacement = function (s, k) {
  const hashMap = {};
  let maxFreq = 0;
  let leftPointer = 0;
  let longest = 0;

  for (let rightPointer = 0; rightPointer < s.length; rightPointer++) {
    const curr = s[rightPointer];
    hashMap[curr] ? hashMap[curr] += 1 : hashMap[curr] = 1;

    maxFreq = Math.max(maxFreq, hashMap[curr]);

    if (maxFreq + k < rightPointer - leftPointer + 1) {
      hashMap[s[leftPointer]]--
      leftPointer++
    }
    longest = Math.max(longest, rightPointer - leftPointer + 1);
  };
  return longest;
};

console.log(characterReplacement(s, k));
