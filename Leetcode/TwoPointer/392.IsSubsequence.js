const s = "abc";
const t = "ahbgdc"
// Output: true

// const s = "axc"; 
// const t = "ahbgdc";
// Output: false

// const isSubsequence = (s, t) => {

//   let left = 0;
//   let right = 0;

//   while (left < s.length && right < t.length) {
//     if (s[left] === t[right]) {
//       left++;
//     }
//     right++;
//   }
//   return left === s.length;
// }

// console.log(isSubsequence(s, t));

const isSubsequence = (s, t) => {

  let left = 0;

  for (let i = 0; i < t.length; i++) {
    if (t[i] === s[left]) {
      left++;
    }

    if (left === s.length) {
      return true;
    }
  }
}

console.log(isSubsequence(s, t));
