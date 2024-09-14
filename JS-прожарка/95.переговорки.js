const isMeetingsNotOverlap = intervals => {
  const sortIntervals = intervals.sort((a, b) => a[0] - b[0]);

  let start = sortIntervals[0];
  
  for (let i = 1; i < sortIntervals.length; i++) {
    if (start[1] < sortIntervals[i][0]) {
      start = sortIntervals[i];
    } else {
      return false;
    }
  }
  return true;
};

console.log(isMeetingsNotOverlap([[5, 10], [0, 30], [15, 20]])); // false
console.log(isMeetingsNotOverlap([[5, 8], [9, 15]])); // true
