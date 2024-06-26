const controller = new AbortController();

const signal = controller.signal;

setTimeout(() => {
  controller.abort();
}, 3000);


fetch('https://api.example.com/data', { signal })
  .then(res => res.json())
  .then(data => console.log(data))
  .catch(err => {
    if (err.name === 'AbortError') {
      console.log('Fetch request aborted');
    } else {
      console.error('Fetch request failed:', err);
    }
  })
