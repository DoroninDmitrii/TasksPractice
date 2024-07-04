const intervals = [[0, 40], [5, 10], [15, 20]];

// // Output: 2

const meetingRoom = (intervals) => {
  if (!intervals || intervals.length === 0) {
    return 0;
  }

  const starts = intervals.map(i => i[0]).sort((a, b) => a - b);
  const ends = intervals.map(i => i[1]).sort((a, b) => a - b);

  let rooms = 0;
  let end = 0;

  for (let i = 0; i < intervals.length; i++) {
    if (starts[i] < ends[end]) {
      rooms++;
    } else {
      end--;
    }
  }
  return rooms;
}

console.log(meetingRoom(intervals));


