const getThirdMaxNum = (nums) => {
  const set = new Set(nums);
  const arraySet = Array.from(set).sort((a, b) => a - b);
  return typeof arraySet[arraySet.length - 3] === 'number'
    ? arraySet[arraySet.length - 3]
    : arraySet[arraySet.length - 1];
}

console.log(getThirdMaxNum([3, 2, 1])); // 1
console.log(getThirdMaxNum([1, 2])); // 2
console.log(getThirdMaxNum([2, 2, 3, 1])); // 1
console.log(getThirdMaxNum([5, 2, 2])); // 5
