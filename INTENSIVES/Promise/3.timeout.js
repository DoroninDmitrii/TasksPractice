// Необходимо написать функцию, которая принимает объект Promise и некоторое количество миллисекунд 
// и возвращает новый Promise.
// Если переданный Promise не успевает зарезолвится до истечения этого времени,
// то результирующий Promise должен быть отклонён с ошибкой new Error('Timeout').

function timeout(promise, ms) {
  const timeoutPromise = new Promise((_, reject) => {
    setTimeout(() => reject(new Error('Timeout')), ms);
  });

  return Promise.race([promise, timeoutPromise]);
}


timeout(fetch('https://jsonplaceholder.typicode.com/todos/1'), 500)
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.log(error.message));
