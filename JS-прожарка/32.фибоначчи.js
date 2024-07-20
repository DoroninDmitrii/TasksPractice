const genFibonacciSequence = (sequenceLength) => {

  if (sequenceLength === 1) {
    return [0];
  }

  let sequence = [0, 1];

  for (let i = 2; i < sequenceLength; i++) {
    sequence[i] = sequence[i - 1] + sequence[i - 2];
  }
  return sequence;
};





console.log(genFibonacciSequence(10));
// [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]

console.log(genFibonacciSequence(1));
// [0]
