const getMatchedNumbers = (numsOne, numsTwo) => {
  const setArray1 = new Set(numsOne);
  const setArray2 = new Set(numsTwo);

  const matched = [];
  const different = [];

  for (const item of setArray1) {

    if (setArray2.has(item)) {
      matched.push(item);
    } else {
      different.push(item);
    }
  }

  for (const item of setArray2) {
    if (!setArray1.has(item)) {
      different.push(item);
    }
  }

  return {
    matched,
    different
  }
}

console.log(getMatchedNumbers([1, 3, 3, 5], [3, 5, 6]));
// { matched: [3, 5], different: [1, 6] }
