const redCar = {
  wheels: 4,
  brake: 4,
  speed: 100,
  options: [
    { optionsKey: '123', optionName: 'color' },
    { optionsKey: '456', optionName: 'colorSecond' }
  ]
}

const yellowCar = {
  wheels: 3,
  brake: 2,
  speed: 70,
  options: [
    { optionsKey: '321', optionName: 'isBroken' },
    { optionsKey: '654', optionName: 'colorSecond' }
  ]
} // false

const greenCar = {
  wheels: 4,
  brake: 4,
  speed: 100,
  options: [
    { optionsKey: '123', optionName: 'color' },
    { optionsKey: '456', optionName: 'colorSecond' }
  ]
} // true

const isEqual = (firstObj, secondObj) => {
  const objFirst = Object.keys(firstObj);
  const objSecond = Object.keys(secondObj);

  if (objFirst.length !== objSecond.length) {
    return false;
  }

  for (let key in firstObj) {
    const isObject = typeof firstObj[key] === 'object' && typeof secondObj[key] === 'object';

    if (isObject) { 
      if (!isEqual(firstObj[key], secondObj[key])) {
        return false;
        
      }
    } else if (firstObj[key] !== secondObj[key]) {
      return false;
    }
  }
  return true;
}

console.log(isEqual(redCar, greenCar));
