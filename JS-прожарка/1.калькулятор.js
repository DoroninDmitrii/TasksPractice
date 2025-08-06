const sum = (x, y) => x + y;
const minus = (x, y) => x - y;
const double = (x) => sum(x, x);
const addOne = (x) => sum(x, 1);

const chain = (fns) => {
  Object.keys(fns).forEach((key) => {
    const originFn = fns[key];

    fns[key] = (...args) => {
      fns.value = !fns.value ? originFn(...args) : originFn(fns.value, ...args);
      return fns;
    }
  })
  fns.execute = () => {
    const result = fns.value;
    fns.value = null;
    return result;
  }
  return fns;
};

const c = chain({ sum, minus, double, addOne });

console.log(
  c.sum(4, 5).sum(5).minus(4).sum(7).addOne().double().double().execute()
); // 72
// console.log(c.sum(4, 5).sum(5).execute()); // 14
