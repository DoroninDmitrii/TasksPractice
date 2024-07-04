const fetchMock = (endpoint) => {
  console.log('fetched --> ' + endpoint);
  
  const ms = Number(endpoint.slice(1));

  return new Promise((resolve, reject) => {
    if (endpoint === "/error" || Number.isNaN(ms)) {
      reject(endpoint);
    } else {
      setTimeout(() => {
        resolve(endpoint);
      }, ms);
    }
  });
};

const requestQueue = (endpoints, callback, limit = 3) => {
  const results = new Array(endpoints.length);
  let index = 0;

  const worker = async () => {
    while (index < endpoints.length) {
      const currentIndex = index++;
      const endpoint = endpoints[currentIndex];

      try {
        const result = await fetchMock(endpoint);
        results[currentIndex] = result; 
      } catch(err) {
        results[currentIndex] = err;
      }
    }
  }
  const workers = [];

  for (let i = 0; i < limit; i++) {
    workers.push(worker());
  }

  Promise.all(workers).then(() => callback(results));
};

console.log(requestQueue(
  ["/3000", "/3000", "/3000", "/error", "/2000", "/500", "/600", "/error"],
  (data) => console.log(data)
));
