const fnA = (cb) => {
  setTimeout(() => {
    cb('a');
  }, 300);
}

const fnB = (cb) => {
  setTimeout(() => {
    cb('b');
  }, 200);
}
const runInParallel = (fns, cb) => {
  // реализуй функцию runInParallel
}


runInParallel([fnA, fnB], console.log);  
// ['b', 'a']
