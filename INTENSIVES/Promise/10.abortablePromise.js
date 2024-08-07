// Необходимо написать функцию, которая принимала бы некоторый Promise и экземпляр AbortController и 
// возвращала бы новый.
// Этот промис можно отменить с помощью использования переданного AbortController. При отмене промис режектится.

const abortablePromise = (promise, signal) => {
  return new Promise((resolve, reject) => {
    signal.addEventListener('abort', () => {
      setTimeout(() => {
        reject(new Error('Promise was aborted'));
      }, 2000)
    });

    promise
      .then(resolve)
      .catch(reject);
  })
}

const promise = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('Success')
    }, 3000)
  })
};

const controller = new AbortController();
const signal = controller.signal;

abortablePromise(promise(), signal)
.then(console.log)
.catch(console.error);

controller.abort();
