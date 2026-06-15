const s = "racecar"; 
const t = "carrace"


const  isAnagram = function(s, t) {
  if (s.length !== t.length) {
      return false;
  }

  const countS = {};
  const countT = {};

  for (let i = 0; i < s.length; i++) {
    const currentS = s[i];
    const currentT = t[i];

    countS[currentS] ? countS[currentS] += 1 : countS[currentS] = 1;
    countT[currentT] ? countT[currentT] += 1 : countT[currentT] = 1;
  
  }

  for (const key in countS) {
      if (countS[key] !== countT[key]) {
          return false;
      }
  }
  return true;
};


console.log(isAnagram(s, t))