function* objToIterator(obj) {
  const entries = Object.entries(obj);

  for (let [key, value] of entries) {
    yield { value: value, done: false };
  }
}

const generator = objToIterator({ a: 1, b: 2 });
console.log(Array.from(generator));

