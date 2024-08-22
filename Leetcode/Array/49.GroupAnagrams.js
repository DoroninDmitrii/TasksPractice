const strs = ["eat", "tea", "tan", "ate", "nat", "bat"];
// Output: [["bat"],["nat","tan"],["ate","eat","tea"]]

const groupAnagrams = function (strs) {

  const hashMap = {};

  for (let i = 0; i < strs.length; i++) {
    const current = strs[i].split('').sort().join('');

    if (!hashMap[current]) {
      hashMap[current] = [];
    }
    
    hashMap[current].push(strs[i]);
  }
  return Object.values(hashMap);
};

console.log(groupAnagrams(strs));
