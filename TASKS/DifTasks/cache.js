const firstItem = () => {
  return 'Hello'
}

const cacheFunc = (func) => {
  const cache = new Map();

  return () => {
    if (cache.has(func)) {
      console.log('1')
      return cache.get(func);
    } else {
      console.log('2')
      const result = func();
      cache.set(func, result);
      return result;
    }
  }
}

// const checkCache = cacheFunc(firstItem);
// console.log(checkCache());
// console.log(checkCache());
// console.log(checkCache());








