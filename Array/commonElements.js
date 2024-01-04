const arr1 = [1, 2, 4, 7, 11, 19];
const arr2 = [2, 7, 19, 28, 31];

// const findCommonElement = (arr1, arr2) => {
//   const set1 = new Set(arr1);

//   const commonElements = arr2.filter(item => set1.has(item));
//   return commonElements;
// }

// console.log(findCommonElement(arr1, arr2));

const findCommonElement = (arr1, arr2) => {
  const dict = {};

  arr1.forEach(item => {
    console.log(item)
    dict[item] = true;
  });

  const commonElement = arr2.filter(item => dict[item]);

  return commonElement;
};

console.log(findCommonElement(arr1, arr2));

