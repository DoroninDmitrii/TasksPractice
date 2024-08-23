const arr1 = [0, 1, 2];
const arr2 = [2, 1, 0];

const isSimilar = (arr1, arr2) => {

  if (arr1.length !== arr2.length) {
    return false;
  }

  const hashMap = {};

  for (let i = 0; i < arr1.length; i++) {
    const current = arr1[i];

    hashMap[current] ? hashMap[current] += 1 : hashMap[current] = 1;
  }

  for (let i = 0; i < arr2.length; i++) {
    const current = arr2[i];

    if (hashMap[current]) {
      hashMap[current]--;
    }
  }

  return Object.values(hashMap).every(el => el === 0);
};

console.log(isSimilar(arr1, arr2));
