// const intervals = [[1, 2], [2, 3], [3, 4], [1, 3]];
// Output: 1
// Explanation: [1,3] can be removed and the rest of the intervals are non-overlapping.

// const eraseOverlapIntervals = intervals => {
  
//   if (intervals.length <= 1) {
//     return 0;
//   }
  
//   intervals.sort((a, b) => a[1] - b[1]);
  
//   let firstInterval = intervals[0][1];
//   let count = 0;
  
//   for (let i = 1; i < intervals.length; i++) {
//     const currentInverval = intervals[i];
    
//     if (currentInverval[0] < firstInterval) {
//       count++;
//     } else {
//       firstInterval = intervals[i][1];
//     }
//   }
//   return count;
// };

// console.log(eraseOverlapIntervals(intervals));

const intervals = [[1, 2], [2, 3], [3, 4], [1, 3]];

const nonoverlapinterval = (intervals) => {

  const sortInterval = intervals.sort((a, b) => a[1] - b[1]);

  let count = 0;
  let firstInterval = sortInterval[0];

  for (let i = 1; i < sortInterval.length; i++) {
    const current = sortInterval[i];

    if (firstInterval[1] === current[0]) {
      firstInterval = current;
    } else {
      count++;
    }
  }
  return count;
}

console.log(nonoverlapinterval(intervals));
