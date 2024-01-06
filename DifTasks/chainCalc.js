const sum = (x, y) => x + y;
const minus = (x, y) => x - y;
const double = (x) => sum(x, x);
const addOne = (x) => sum(x, 1);

const chain = (fns) => {
  let result = null;
  
  Object.keys(fns).forEach((key) => {
    const originFn = fns[key];

    fns[key] = (...args) => {
      if (!result) {
        result = originFn(...args);
      } else {
        result = originFn(result, ...args);
      }
      return fns;
    };
  });

  fns.execute = () => {
    const data = result;
    result = null;
    return data;
  };

  return fns;
};

const c = chain({ sum, minus, double, addOne });

console.log(
  c.sum(4, 5).sum(5).minus(4).sum(7).addOne().double().double().execute()
); // 72
console.log(c.sum(4, 5).sum(5).execute()); // 14
console.log(c.sum(4, 5).sum(5).execute()); // 14


