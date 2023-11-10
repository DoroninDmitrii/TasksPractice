const input1 = [1, 0, 0, 0, 1, 0, 1];
// const input2 = [1, 0, 0, 0]

const maxSeats = function(seats) {
  let max = 0;
  let count = 0;

  for (let i = 0; i < seats.length; i++) {
    let current = seats[i];

    if (i === seats.length - 1 && current === 0) {
      count += 1;
      max = Math.max(max, count)
      break;
    }

    if (current === 1) {
      count = 0;
    } else {
      count += 1;
      max = Math.max(max, Math.ceil(count / 2));
    }
  }
return max
}

console.log(maxSeats(input1));

