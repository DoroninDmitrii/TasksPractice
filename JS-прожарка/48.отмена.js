// Нужно написать обертку, которая принимает генератор и возвращает кортеж:
// const [cancel, promise] = cancellable(Task());

const cancellable = (generator) => {
  let isCancelled = false;

  const cancel = () => {
    isCancelled = true;
  }

  const promise = async () => {
    let next = generator.next();
  }
}


function* Task() {
  const value = yield Promise.resolve('Успешно');
  
  yield new Promise((resolve) => setTimeout(resolve, 100));
  
  return value;
}

// const [cancel, promise] = cancellable(Task());

// promise.then(console.log); // 'Успешно'

// setTimeout(cancel, 50);
// promise.catch(console.log); // 'Отмена'
 