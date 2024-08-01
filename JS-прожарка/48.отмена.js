// Нужно написать обертку, которая принимает генератор и возвращает кортеж:
// const [cancel, promise] = cancellable(Task());

const cancellable = (generator) => {
  let isCancelled = false;

  const cancel = () => {
    isCancelled = true;
  }

  const promise = async () => {
    let next = generator.next();

    while (!next.done) {
      try {
        let value = await next.value;

        if (isCancelled) {
          throw 'Cancel';
        }

        next = generator.next(value);
      } catch (error) {
        next = generator.throw(error);
      }
    }
    return next.value;
  }
  return [cancel, promise()];
}


function* Task() {
  const value = yield Promise.resolve('Успешно');
  
  yield new Promise((resolve) => setTimeout(resolve, 100));
  
  return value;
}

const [cancel, promise] = cancellable(Task());

// promise.then(console.log); // 'Успешно'

setTimeout(cancel, 100);
// promise.catch(console.log); // 'Отмена'
 