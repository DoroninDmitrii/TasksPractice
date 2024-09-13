const deepCopy = (obj) => {
  if (obj === null || typeof obj !== 'object') {
    return obj;
  }

  if (Array.isArray(obj)) {
    return obj.map((item) => deepCopy(item));
  }

  const copy = {};

  for (const key in obj) {
    if (obj.hasOwnProperty(key)) {
      copy[key] = deepCopy(obj[key])
    }
  }
  return copy;
}

const original = { a: { b: { c: [1] } }, d: 2 };
const copy = deepCopy(original); // { a: { b: { c: [1] } }, d: 2 }
console.log(original === copy); // false
