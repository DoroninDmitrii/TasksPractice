const promise1 = new Promise(resolve => setTimeout(resolve, 3000, 'one'));
const promise2 = new Promise(resolve => setTimeout(resolve, 2000, 'two'));


const promiseRace = (promises) => {
  return new Promise((resolve, reject) => {
    for (let i = 0; i < promises.length; i++) {
      const promise = promises[i];

      promise
        .then((value) => {
          resolve(value)
        })
        .catch((error) => {
          reject(error)
        })
    }
  })
}

promiseRace([promise1, promise2])
  .then(value => {
    console.log('Resolved:', value)
  })
  .catch(reason => {
    console.error('Rejected:', reason)
  })
