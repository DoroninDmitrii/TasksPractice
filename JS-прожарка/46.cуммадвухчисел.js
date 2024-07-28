const hasTarget = (arr, target) => {
  
  const hashMap = {};
  
  for (let i = 0; i < arr.length; i++) {
    const current = arr[i];
    hashMap[current] = i;
  }

  for (let i = 0; i < arr.length; i++) {
    const current = arr[i];

    const diff = target - current;
    
    if (hashMap[diff] && hashMap[diff] !== i) {
      // return [i, hashMap[diff]];
      return true;
    }
  }
  return false;
}

console.log(hasTarget([0, 10, 12, 3, 8, 9], 18)); // true
// console.log(hasTarget([0, 10, 12, 3, 8, 9], 24)); // false
