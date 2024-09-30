const arr = [2, 4, 5, 3];
const target = 7;

function findPairs(arr, target) {
  const hashMap = {};

  for (let i = 0; i < arr.length; i++) {
    const current = arr[i];
  
    hashMap[current] ? hashMap[current] += 1 : hashMap[current] = 1;
  }

  const result = [];

  for (key in hashMap) {
    const diff = target - key;

    if (hashMap[diff]) {
      result.push([diff, Number(key)]);
      hashMap[key]--;
    }
  }
  return result;
};

console.log(findPairs(arr, target)); // [[5, 2], [4, 3]];


