const TraverseGenerator = function* (arr) {
  for (let i = 0; i < arr.length; i++) {
    if (typeof arr[i] === 'object') {
      yield* TraverseGenerator(arr[i]);
    }
    yield arr[i];
  }
}

const generatorOne = TraverseGenerator([1, [2, 3]]);
console.log(generatorOne.next().value); // 1
console.log(generatorOne.next().value); // 2
console.log(generatorOne.next().value); // 3

// const generatorTwo = TraverseGenerator([[[6]], [1, 3], []]);
// console.log(generatorTwo.next().value); // 6
// console.log(generatorTwo.next().value); // 1
// console.log(generatorTwo.next().value); // 3

