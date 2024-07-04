const intervals = [[1,2],[3,5],[6,7],[8,10],[12,16]]; 
const newInterval = [4,8];

// Output: [[1,2],[3,10],[12,16]]

const insert = (intervals, newInterval) => {
  const length = intervals.length;
  let left = 0;
  let result = [];

  while (left < length && intervals[left][1] < newInterval[0]) {
    result.push(intervals[left]);
    left++;
  }

  while (left < length && intervals[left][0] <= newInterval[1]) {
    newInterval[0] = Math.min(newInterval[0], intervals[left][0]);
    newInterval[1] = Math.max(newInterval[1], intervals[left][1]);
    left++
  }

  result.push(newInterval);

  while (left < length) {
    result.push(intervals[left]);
    left++;
  }

  return result;
}

console.log(insert(intervals, newInterval));
