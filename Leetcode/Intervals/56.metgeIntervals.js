const intervals = [[1, 3], [2, 6], [8, 10], [15, 18]];


const mergeIntervals = (intervals) => {

  if (intervals.length === 0) {
    return [];
  }

  intervals.sort((a, b) => a[0] - b[0]);

  const mergedIntervals = [intervals[0]];

  for (let i = 1; i < intervals.length; i++) {
    const currentInterval = intervals[i];
    const lastMergedInterval = mergedIntervals[mergedIntervals.length - 1];

    if (currentInterval[0] > lastMergedInterval[1]) {
      mergedIntervals.push(currentInterval);
    } else {
      lastMergedInterval[1] = Math.max(lastMergedInterval[1], currentInterval[1]);
    }
  }
  return mergedIntervals;
}

console.log(mergeIntervals(intervals))
