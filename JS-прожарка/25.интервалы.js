// Есть несколько часовых интервалов
// Нужно схлопнуть те, которые пересекаются:

const intervals = [[1, 3], [2, 6], [8, 10], [15, 18]];


// [[1, 6], [8, 10], [15, 18]] 

const mergeIntervals = (intervals) => {

  const sortIntervals = intervals.sort((a, b) => a[0] - b[0]);

  let currentInterval = sortIntervals[0];
  let result = [currentInterval];

  for (let i = 1; i < sortIntervals.length; i++) {
    const nextInterval = sortIntervals[i];

    if (nextInterval[0] <= currentInterval[1]) {
      currentInterval[1] = Math.max(currentInterval[1], nextInterval[1]);
    } else {
      currentInterval = nextInterval;
      result.push(currentInterval);
    }
  }
  return result;
};

console.log(mergeIntervals(intervals));

// const merge = intervals => {
//   if (intervals.length === 0) {
//       return [];
//   }

//   intervals.sort((a, b) => a[0] - b[0]);

//   const mergedIntervals = [intervals[0]];

//   for (let i = 1; i < intervals.length; i++) {
//       const currentInterval = intervals[i];
//       const lastMergedInterval = mergedIntervals[mergedIntervals.length - 1];

//       if (currentInterval[0] > lastMergedInterval[1]) {
//           mergedIntervals.push(currentInterval);
//       } else {
//           lastMergedInterval[1] = Math.max(lastMergedInterval[1], currentInterval[1]);
//       }
//   }

//   return mergedIntervals;
// };
