const plus = (a, b) => {
  return a + b;
};


const memo = (fn) => {
  let cache = new Map();

  return (...args) => {
    const key = JSON.stringify(args);

    if (cache.has(key)) {
      console.log('cache')
      return cache.get(key);
    } else {
      console.log('NOcache')
      const result = fn(...args);
      cache.set(key, result);
      return result;
    }
  }
};

// const memoPlus = memo(plus);

// sec var

const memoSec = (fn) => {
  const cache = {};

  return (...args) => {
    if (cache.hasOwnProperty(args)) {
      console.log('cache');
      return cache[args];
    } else {
      console.log('NOcache');
      cache[args] = fn(...args);
      return cache[args]
    }
  }
}

const memoPlus = memoSec(plus);

console.log(memoPlus(1, 2), '1'); // 3 (вызов plus)
console.log(memoPlus(3, 1), '2'); // 4 (вызов plus)
console.log(memoPlus(1, 2), '3'); // 3 (обращение к cache)
