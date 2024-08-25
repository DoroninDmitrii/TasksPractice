// async function get(url, n) {
//   try {
//     const response = await fetch(url);
//     return response;
//   } catch (err) {
//     if (n === 1) {
//       throw err;
//     }
//     return get(url, n - 1);
//   }
// };

// get('https://jsonplaceholder.typicode.com/todos/1', 3)
// .then(res => console.log(res))
// .catch(err => console.error(err))

async function get(url, n) {
  let attempts = 0;

  while (attempts < n) {
    try {
      const response = await fetch(url);
      return response.json();
    } catch (err) {
      attempts++;

      if (attempts >= n) {
        throw err;
      }
    }
  }
};

get('https://jsonplaceholder.typicode.com/todos/1', 3)
  .then(res => console.log(res))
  .catch(err => console.error(err))
