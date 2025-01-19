/* Необходимо написать функции, которая принимает два аргумента: асинхронную функцию и время таймаута в миллисекундах. Функция должна возвращать новую асинхронную функцию, которая выполняет исходную функцию с ограничением времени, должны выполняться следующие условия:
Если время выполнения исходной функции меньше времени ожидания, то новая функция должна вернуть выполненную асинхронной функции.
Если время выполнения исходной функции больше времени ожидания, то новая функция вернуть сообщение "Превышен лимит времени выполнения". **/

function asyncLimit(asyncFn, delay) {
  return async function(...args) {
    return new Promise((resolve, reject) => {

      const timer = setTimeout(() => {
        reject("Превышен лимит времени выполнения");
      }, delay);

      asyncFn(...args)
      .then(result => {
        clearTimeout(timer);
        resolve(result);
      })
      .catch(error => {
        clearTimeout(timer);
        reject(error);
      })
    })
  }
}

const fn = async (n) => {
  await new Promise(res => setTimeout(res, 100));
  return n * n;
};

const fnWithLimit = asyncLimit(fn, 50);
fnWithLimit(5).then(console.log).catch(console.error); // Превышен лимит времени выполнения

const fnWithLimit2 = asyncLimit(fn, 150);
fnWithLimit2(5).then(console.log).catch(console.error); // 25


