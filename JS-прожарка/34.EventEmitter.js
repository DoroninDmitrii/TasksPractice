// Нужно написать свой собственный обработчик событий,
// реализовав методы подписки, отписки и генерации ивентов:

// class EventEmitter {
//     …
//     subscribe () { … }
//     unsubscribe() { … }
//     emit () { … }
//     …
// }

class EventEmitter {
  // реализуй класс EventEmitter
}





const eventEmitter = new EventEmitter();

const handleClick = (payload) => {
  console.log({ event: 'click', payload, fnName: handleClick.name });
}

eventEmitter.subscribe('click', handleClick);
eventEmitter.subscribe('click', (payload) => console.log({ event: 'click', payload, fnName: 'anonymus' }));
eventEmitter.emit('click', 'click-payload');
/* 
  { event: 'click', payload: 'click-payload', fnName: 'handleClick' }
  { event: 'click', payload: 'click-payload', fnName: 'anonymus' }
*/

eventEmitter.unsubscribe('click', handleClick);
eventEmitter.emit('click', 'click-payload-2');
/* 
  { event: 'click', payload: 'click-payload', fnName: 'anonymus' }
*/
