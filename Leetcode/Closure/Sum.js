function sum(num) {
  let result = 0;

  result += num;

  if (num === undefined) {
    return result;
  }

  const calc = num => {
    if (num === undefined) {
      return result;
    }

    result += num;
    return calc;
  };

  return calc;
}

console.log(sum(2)(3)(4)());
