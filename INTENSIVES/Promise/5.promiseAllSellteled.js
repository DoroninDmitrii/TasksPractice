const allSettled = (promises) => {
  return new Promise((resolve, reject) => {
    const result = [];
    let completed = 0;
    
    for (let i = 0; i < promises.length; i++) {
      promises[i]
        .then((value) => {
          result[i] = { status: 'fulfilled', value };
        })
        .catch((error) => {
          result[i] = { starus: 'rejected', error }
        })
        .finally(() => {
          completed++;
          if (result.length === completed) {
            resolve(result);
          }
        })
    }
  })
};

allSettled([
  new Promise((resolve) => {
    setTimeout(() => resolve('foo'), 5000)
  }),

  new Promise((resolve, reject) => {
    setTimeout(() => reject('bar'), 1000);
  }),
  new Promise((resolve) => {
    setTimeout(() => resolve('bar2'), 2000);
  }),
])
  .then((res) => console.log('RESOLVED: ', res))
  .catch((err) => console.log('REJECTED: ', err));
