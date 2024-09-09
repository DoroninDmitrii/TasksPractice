const n = 3;
// Output: [[1,2,3],[8,9,4],[7,6,5]]

const generateMatrix = function (n) {
  const matrix = Array.from({ length: n }, () => Array(n).fill(0));

  let value = 1;
  let left = 0;
  let right = n - 1;
  let top = 0;
  let bottom = n - 1;

  while (left <= right && top <= bottom) {
    // Fill the top row (left to right)
    for (let i = left; i <= right; i++) {
      matrix[top][i] = value++;
    }
    top++;  // Move the top boundary down

    // Fill the right column (top to bottom)
    for (let i = top; i <= bottom; i++) {
      matrix[i][right] = value++;
    }
    right--; // Move the right boundary left

    if (top <= bottom) {
      for (let i = right; i >= left; i--) {
        matrix[bottom][i] = value++;
      }
      bottom--; // Move the bottom boundary up
    }

    // Fill the left column (bottom to top)
    if (left <= right) {
      for (let i = bottom; i >= top; i--) {
        matrix[i][left] = value++;
      }
      left++;  // Move the left boundary right
    }
  }

  return matrix;
};

console.log(generateMatrix(n));
