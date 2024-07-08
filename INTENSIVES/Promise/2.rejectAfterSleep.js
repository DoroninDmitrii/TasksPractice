// Необходимо написать функцию возвращающую Promise, который зареджектится через заданное количество миллисекунд.
// Вторым аргументов функция принимает объект ошибки.


const rejectAfterSleep = (timer, textError) => {
  return new Promise((_, reject) => {
    setTimeout(() => {
      reject(textError);
    }, timer);
  })
};

rejectAfterSleep(2000, 'boom!').catch((err) => {
  console.log(err);
});
