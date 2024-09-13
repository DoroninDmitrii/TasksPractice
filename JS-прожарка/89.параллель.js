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
  const promises = fns.map(fn => new Promise((resolve, _) => {
    fn(resolve);
  }));

  const results = [];

  for (let i = 0; i < promises.length; i++) {
    promises[i].then((data) => {

      results.push(data);

      if (results.length === promises.length) {
        cb(results);
      }
    })
  }
}


runInParallel([fnA, fnB], console.log);  
// // ['b', 'a']

