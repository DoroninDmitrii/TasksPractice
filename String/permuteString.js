const str = 'a1b';

function permuteString(str) {
  
  if (str.length <= 1) {
    return [str];
  }
  
  let permutations = [];
  
  for (let i = 0; i < str.length; i++) {
    const char = str[i];
    const remainChars = str.slice(0, i) + str.slice(i + 1);
    const innerPermutation = permuteString(remainChars);
    
    innerPermutation.forEach((perm) => {
      permutations.push(char.toUpperCase() + perm.toUpperCase());
    })
  }
  return permutations;
}

console.log(permuteString(str))
