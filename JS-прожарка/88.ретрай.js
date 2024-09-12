const fetchMock = () => {
  return new Promise((_, reject) => {
    console.log('jsgrill');

    setTimeout(reject, 1000);
  });
}

// const withRetry = async (retry = 3) => {
//   try {
//     const response = await fetchMock();
//     const result = response.json();
//     return result;
//   } catch (err) {
//     if (retry === 0) {
//       throw err;
//     }
//     return withRetry(retry - 1);
//   }
// }

const withRetry = async (retry = 3) => {
  let attempts = 0;

  while (attempts < retry) {
    try {
      const response = await fetchMock();
      const result = await response.json();
      return result;
    } catch(err) {
      attempts++;
      if (attempts >= retry) {
        throw err;
      }
    }
  }
}

withRetry()
  .then(() => conole.log('resolved'))
  .catch((error) => console.log(error));

// jsgrill
// jsgrill
// jsgrill
// jsgrill
