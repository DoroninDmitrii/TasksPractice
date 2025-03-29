const a = {self: {self: 'a'}}
const b = {self: {self: 'a'}}

function isEqual(firstObj, secondObj, visited = new Set()) {
  if (firstObj === secondObj) {
    return true;
  }

  if (typeof firstObj !== 'object' || typeof secondObj !== 'object') {
    return false;
  }

  visited.add(firstObj);
  visited.add(secondObj);

  if (Object.keys(firstObj).length !== Object.keys(secondObj).length) {
    return false;
  }

  for (let key in firstObj) {
    if (visited.has(firstObj[key]) && visited.has(secondObj[key])) {
      return true;
    }
    if (!isEqual(firstObj[key], secondObj[key], visited)) {
      return false;
    }
  }
  return true;
}

console.log(isEqual(a, b))
