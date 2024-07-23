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
  constructor() {
    this.events = {};
  }

  subscribe(typeEvent, callback) {
    if (!this.events[typeEvent]) {
      this.events[typeEvent] = [];
    }
    this.events[typeEvent].push(callback);
  }

  unsubscribe(typeEvent, callback) {
    if (!this.events[typeEvent]) return false;
    
    const index = this.events[typeEvent].indexOf(callback);
    if (index > -1) {
      this.events[typeEvent].splice(index, 1);
      return true;
    }
    return false;
  }

  emit(typeEvent, data) {
    if (!this.events[typeEvent]) return false;

    this.events[typeEvent].forEach((callback) => callback(data));
    return true;
  }
}


const eventEmitter = new EventEmitter();

const handleClick = (payload) => {
  console.log({ event: 'click', payload, fnName: handleClick.name });
}

console.log(eventEmitter.subscribe('click', handleClick));
// console.log(eventEmitter.subscribe('click2', handleClick));

// eventEmitter.subscribe('click', (payload) => console.log({ event: 'click', payload, fnName: 'anonymus' }));
// eventEmitter.emit('click', 'click-payload');
/*
  { event: 'click', payload: 'click-payload', fnName: 'handleClick' }
  { event: 'click', payload: 'click-payload', fnName: 'anonymus' }
*/

console.log(eventEmitter.unsubscribe('click', handleClick));

console.log(eventEmitter.emit('click', 'click-payload-2'));
/* 
  { event: 'click', payload: 'click-payload', fnName: 'anonymus' }
*/
