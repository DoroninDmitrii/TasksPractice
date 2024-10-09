// function retryFetch(url, options, attempts) {
//   const { method = 'GET' } = options;

//   if (method === 'PUT') {
//     return fetch(url, options)
//   }

//   const attemptsFetch = (retries) => {
//     return fetch(url, options)
//     .then(response => {
//       if (response.ok) {
//         return response;
//       }

//       if (response.status === 401 || response.status === 403) {
//         return Promise.reject(new Error('Unauthorized or Forbidden'));
//       }

//       if (retries === 0) {
//         return Promise.reject(new Error(`Failed after ${attempts}`));
//       }

//       return attemptsFetch(retries - 1);
//     })
//     .catch(error => {
//       if (retries === 0) {
//         return Promise.reject(error);
//       }
//       return attemptsFetch(retries - 1);
//     })
//   }
//   return attemptsFetch(attempts);
// }


// retryFetch('https://jsonplaceholder.typicode.com/todos/1', { method: 'GET' }, 3)
//   .then(response => {
//     return response.json();
//   })
//   .then(data => {
//     console.log('Data received:', data);
//   })
//   .catch(error => {
//     console.error('Fetch failed:', error.message);
//   });


function retryFetch(url, options, attempts) {
  const { method = 'GET' } = options;

  if (method === 'PUT') {
    return fetch(url, options)
  }

  return fetch(url, options)
  .then(response => {
      
      if (response.status === 401 || response.status === 403) {
        return Promise.reject(new Error('Unauthorized or Forbidden'));
      }

      if (response.ok) {
        return response;
      }
    })
    .catch(error => {
      if (attempts === 0) {
        return Promise.reject(error);
      }
      return retryFetch(attempts - 1);
    })
}

retryFetch('https://jsonplaceholder.typicode.com/todos/1', { method: 'GET' }, 3)
  .then(response => {
    return response.json();
  })
  .then(data => {
    console.log('Data received:', data);
  })
  .catch(error => {
    console.error('Fetch failed:', error.message);
  });
