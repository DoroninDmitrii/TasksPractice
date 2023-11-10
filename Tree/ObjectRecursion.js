let myObj = {
  a: 'qqq',
  b: 'tut',
  g: [1, 2, 3],
  c: {
    d: 'lol',
    e: {
      f: 'hhh',
      g: 'vpp',
    },
  },
};

let propToUp = (myObj, parentKey = null, res = {}) => {
  for (let key in myObj) {
    const propName = parentKey ? parentKey + '.' + key.toUpperCase() : key.toUpperCase()
    if (typeof myObj[key] === 'object' && !Array.isArray(myObj[key])) {
      propToUp(myObj[key], propName, res);
    } else {
      res[propName] = myObj[key]
    }
  }
  return res
};

console.log(propToUp(myObj));
