const delay = (ms) => {
  return new Promise((resolve, reject) => {
   setTimeout(() => {
      return resolve(ms);
    }, ms);
  }) 
}

console.log('jsgrill');
delay(100).then(console.log);
delay(0).then(console.log); 
/*
  1. 'jsgrill'
  2. 0
  3. 100
*/
