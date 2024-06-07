let arr1 = [1, 2, 2, 3];
let arr2 = [2, 2, 2, 2];


const findEqualElements = (arr1, arr2) => {
  let map = {};
  let result = [];
  
  for (let i = 0; i < arr1.length; i++) {
    let current = arr1[i];
    map[current] ? map[current] += 1 : map[current] = 1;
  }
  
  for (let item of arr2) {
    if (map[item] > 0) {
      result.push(item)
      map[item]--
    }
  }
  return result;
};

console.log(findEqualElements(arr1, arr2));
