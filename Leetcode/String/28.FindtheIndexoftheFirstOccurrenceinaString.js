const haystack = "butsad"; 
const needle = "sad"

const strStr = function(haystack, needle) {

  if (needle === '') return 0;
  
  for (let i = 0; i <= haystack.length - needle.length; i++) {
    if (haystack.substring(i, i + needle.length) === needle) {
      return i;
    }
  }
  return -1;
};

console.log(strStr(haystack, needle));
