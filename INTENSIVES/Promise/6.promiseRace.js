const promiseRace = (promises) => {
  return new Promise((resolve, reject) => {
    for (let i = 0; i < promises.length; i++) {
      promises[i]
        .then((value) => {
          resolve(value)
        })
        .catch((error) => {
          reject(error)
        })
    }
  })
}

const promise1 = new Promise(resolve => setTimeout(resolve, 1000, 'one'));
const promise2 = new Promise(resolve => setTimeout(resolve, 2000, 'two'));

promiseRace([promise1, promise2])
.then(value => {
  console.log('Resolved:', value)
})
.catch(reason => {
  console.error('Rejected:', reason)
})
