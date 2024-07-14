const s1 = "ab";
const s2 = "eidbaooo";

const checkInclusion = (s1, s2) => {

  if (s1.length > s2.length) {
    return false;
  }

  let map = {};

  for (let i = 0; i < s1.length; i++) {
    const current = s1[i];

    map[current] ? map[current] += 1 : map[current] = 1;
  }

  let left = 0;
  let rigth = 0;
  let requiredLength = s1.length;

  while (left < s2.length) {

    if (map[s2[left]] > 0) {
      requiredLength--
    }

    map[s2[left]]--;
    left++;

    if (requiredLength === 0) {
      return true;
    }

    if (left - rigth === s1.length) {
      if (map[s2[rigth]] >= 0) {
        requiredLength++;
        map[s2[rigth]]++;
      }
      rigth++
    }
  }
  return false;
}

console.log(checkInclusion(s1, s2));

// https://leetcode.com/problems/permutation-in-string/solutions/1761929/easy-js-sliding-window-o-n-commented/
