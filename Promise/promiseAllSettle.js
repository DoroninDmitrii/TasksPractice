function allSettled(promises) {
  if (promises.length === 0) {
    return Promise.resolve([])
  }

  const results = []
  let completed = 0
  return new Promise((resolve) => {
    for (let i = 0; i< promises.length; i++) {
      promises[i]
        .then(value => {
          results[i] = { status: 'fulfilled', value }
        })
        .catch(reason => {
          results[i] = { status: 'rejected', reason }
        })
        .finally(() => {
          completed++
          if (completed === promises.length) {
            resolve(results)
          }
        })
    }
  })
}

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
	
