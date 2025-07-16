const getProperty = (obj, path) => {
  const keys = path.split('.');
  let current = obj;

  for (const key of keys) {
    if (current === null) return undefined;

    current = current[key];
  }

  return current;
}


const o = {
  a: {
    b: {},
    c: 'jsgrill',
    d: {
      e: 42,
    },
  },
  z: null,
};

console.log(getProperty(o, 'a.c')); // 'jsgrill'
console.log(getProperty(o, 'a.d.e')); // 42
console.log(getProperty(o, 'z')); // null
