const isEqual = (value1, value2) => {
  let objectFirst = Object.values(value1);
  let objectSecond = Object.values(value2);

  if (objectFirst.length !== objectSecond.length) {
    return false;
  }

  for (let key in value1) {
    const isObject = typeof value1[key] === 'object' && typeof value2[key] === 'object';

    if (isObject) {
      if (!isEqual(value1[key], value2[key])) {
        return false;
      }
    } else if (value1[key] !== value2[key]) {
      return false;
    }
  }
  return true;
}





console.log(isEqual({ x: 1, y: 2 }, { x: 1, y: 2 })); // true
// console.log(isEqual({x: 1, y: 2}, {y: 2, x: 1})); // true
// console.log(isEqual({ y: 2, x: 1 }, { x: 1, y: '2' })); // false
// console.log(isEqual({x: null, y: null}, {x: null, Y: null})); // false
// console.log(isEqual({x: null, y: [1, 2, 3]}, {x: null, y: ['1', '2', '3']})); // false
// console.log(isEqual(true, false)); // false
