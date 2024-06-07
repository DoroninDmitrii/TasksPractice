let first = {x: 1, y: 2};
let second = {y: 2, x: 1};


const isEqual = (first, second) => {
  const firstKeys = Object.keys(first);
  const secondKeys = Object.keys(second);
  
  if (firstKeys.length !== secondKeys.length) {
    return false;
  }

  for (let key of firstKeys) {
    if (first[key] !== second[key]) {
      return false;
    }
  }

  return true;
}

console.log(isEqual(first, second));
