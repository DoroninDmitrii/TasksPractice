const invertObject = (obj) => {

  const newObj = {};

  for (let key in obj) {
    newObj[obj[key]] = key;
  }
  return newObj;
}

console.log(invertObject({ 1: 'a', 2: 'b', 3: 'c' }));

//  Нужно поменять местами его ключи и знчения чтобы получилось так:

// // { a: 1, b: 2, c: 3 }
