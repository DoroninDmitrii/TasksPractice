function get(obj, path) {
  const splitPath = path.split('.');
  let result = obj;

  for (let i = 0; i < splitPath.length; i++) {
    const current = splitPath[i];

    if (!result[current]) {
      return undefined;
    } else {
      result = result[current]
    }
  }
  return result;
}

const obj = {
  a: {
    b: {
      c: 'd'
    },
    e: 'f'
  }
};

console.log(get(obj, 'a.b')); // { c: 'd' };
console.log(get(obj, 'a.b.x')); // { c: 'd' };
