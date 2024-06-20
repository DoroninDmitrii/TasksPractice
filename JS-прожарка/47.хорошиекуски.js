const s = "pwwkew"
// Output: 3

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
