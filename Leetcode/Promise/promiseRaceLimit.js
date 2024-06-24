const check = (arg, sec) => {
  return Promise.race([
    arg(),
    new Promise((resolve, reject) => {
      setTimeout(() => {
        reject(new Error('timeout'));
      }, sec);
    }),
  ]);
};

const req = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('Hello');
    }, 1000);
  });
};

check(req, 2000)
  .then((data) => console.log(data))
  .catch((err) => console.error(err));
