const promiseAll = (promises) => {
  return new Promise((resolve, reject) => {
    let index = 0;
    let result = [];

    for (let i = 0; i < promises.length; i++) {
      promises[i].then((data) => {
        result[i] = data;
        index++;

        if (index === result.length) {
          resolve(result);
        }
      }).catch(err => reject(err));
    }
  })
};

promiseAll([
  new Promise((resolve) => {
    setTimeout(() => resolve('foo'), 5000)
  }),

  new Promise((resolve) => {
    setTimeout(() => resolve('bar'), 1000);
  }),
  new Promise((resolve) => {
    setTimeout(() => resolve('bar2'), 2000);
  }),
])
  .then((res) => console.log('RESOLVED: ', res))
  .catch((err) => console.log('REJECTED: ', err));
