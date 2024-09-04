const findAllDuplicateNumsInArray = (nums) => {  
  const seen = new Set();
  const duplicates = new Set();

  for (let num of nums) {
    if (seen.has(num)) {
      duplicates.add(num);
    } else {
      seen.add(num);
    }
  }
  return duplicates;
}

console.log(findAllDuplicateNumsInArray([4, 3, 2, 7, 8, 2, 3, 1])); // [2, 3]
