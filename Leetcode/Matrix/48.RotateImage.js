const matrix = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
// Output: [[7,4,1],[8,5,2],[9,6,3]]

const rotate = function (matrix) {
  matrix.reverse();

  for (let row = 0; row < matrix.length; row++) {
    for (let col = 0; col < row; col++) {
      const temp = matrix[row][col];
      matrix[row][col] = matrix[col][row];
      matrix[col][row] = temp;
    }
  }
  return matrix;
};

console.log(rotate(matrix));

