let input = [[1, 3], [2, 6], [8, 10], [15, 18]] // [[1,6], [8,10], [15,18]]
let input2 = [[1, 4], [4, 5]] // [[1,5]]


function merge(intervals) {
  
  if (intervals.length < 2) {
    return intervals
  }
  
  intervals.sort((a, b) => a[0] - b[0])
  
  let result = [intervals[0]]
  
  for (let interval of intervals) {
    let recent = result[result.length - 1]
    
    if (recent[1] >= interval[0]) {
      recent[1] = Math.max(recent[1], interval[1])
    } else {
      result.push(interval)
    }
  }
  return result
}

function merge(intervals) {
  intervals.sort((a,b) => a[0] - b[0])
  
  for (let i = 0; i < intervals.length; i++) {    
    if(intervals[i + 1] && intervals[i][1] >= intervals[i + 1][0]) {
      const start = intervals[i][0]
      const end = intervals[i + 1][1]
      intervals.splice(i, 2, [start, end])
      i--
    } 
  }

  return intervals
}

console.log(merge(input))
console.log(merge(input))

// console.log(merge(input2))

