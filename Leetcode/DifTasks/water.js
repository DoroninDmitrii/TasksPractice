let input = [1, 8, 6, 2, 5, 4, 8, 3, 7]


function maxArea(input) {
  let maxArea = 0;
  let left = 0;
  let right = input.length - 1;

  while (left < right) {
    let currentValue = Math.min(input[left], input[right]) * (right - left);
    maxArea = Math.max(maxArea, currentValue)

    if (input[left] < input[right]) {
      left += 1;
    } else {
      right -= 1
    }
  }

  return maxArea
}


console.log(maxArea(input))
