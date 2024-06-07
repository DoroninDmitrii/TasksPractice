const sum = (x, y) => x + y;
const minus = (x, y) => x - y;
const double = (x) => sum(x, x);
const addOne = (x) => sum(x, 1);

const chain = (fns) => {
  let result = null;

  Object.entries(fns).forEach(([key, fn]) => {
    fns[key] = (...args) => {
      if (!result) {
        result = fn(...args); 
      } else {
        result = fn(result,...args);
      }
      return fns;
    }
  })
  fns.execute = () => {
    let currentResult = result;
    return currentResult;
  }
  return fns;
}

const c = chain({ sum, minus, double, addOne });


console.log(
	c.sum(4, 5).sum(5).minus(4).sum(7).addOne().double().double().execute()
) 


