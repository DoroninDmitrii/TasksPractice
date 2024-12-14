const deepFreeze = (obj) => {
  Object.keys(obj).forEach((key) => {
    const value = obj[key];

    if (value && typeof value === 'object' && !Object.isFrozen(value)) {
      deepFreeze(value);
    }
  });
  
  return Object.freeze(obj);
}

const obj = {
  a: 1,
  b: {
    c: 2,
    d: {
      e: 3,
    },
  },
};

const frozenObj = deepFreeze(obj);

frozenObj.a = 10;
frozenObj.b.c = 20;

console.log(frozenObj.a); // 1
console.log(frozenObj.b.c); // 2
