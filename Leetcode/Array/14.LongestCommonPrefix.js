const strs = ["bat","bag","bank","band"]

// Output: "ba"
// Example 2:

// Input: strs = ["dance","dag","danger","damage"]

// Output: "da"

const longestCommonPrefix = (strs) => {
        for (let i = 0; i < strs[0].length; i++) {
            for (let s of strs) {
                if (i === s.length || s[i] !== strs[0][i]) {
                    return s.slice(0, i).length;
                }
            }
        }
    return strs[0];
}


console.log(longestCommonPrefix(strs));