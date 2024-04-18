const intervals = [[1,3],[2,6],[8,10],[15,18]];


const mergeIntervals = (intervals) => {
  
  let result = [intervals[0]];
  let current = result[0];
  
  for (let i = 1; i < intervals.length; i++) {
    const next = intervals[i];
    
    if (current[1] > next[0]) {
      current[1] = Math.max(current[1], next[1]);
    } else {
      current = next;
      result.push(current);
    }
  }
  return result;
}

console.log(mergeIntervals(intervals))
