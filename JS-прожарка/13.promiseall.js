const fOne = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log('first');
      resolve('first');
    }, 1000);
  });
}

const fSecond = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log('second');
      resolve('second');
    }, 1000);
  });
}

const fThird = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log('third');
      resolve('third');
    }, 1000);
  });
}

// let result = Promise.all([fOne(), fSecond(), fThird()]);

const myPromiseAll = (promises) => {
  return new Promise((resolve, reject) => {
    let index = 0;
    const result = [];

    for (let i = 0; i < promises.length; i++) {
      promises[i].then((data) => {
        result[i] = data;
        index++;

        if (result.length === index) {
          resolve(result)
        }
      })
      .catch((err) => console.log(err));
    }
  })

}

myPromiseAll([fOne(), fSecond(), fThird()])
.then((data) => console.log(data));

