export class Observers {

  observers = [];

  constructor(value) {
    this.value = value;
  }

  notify(value) {
    this.observers.forEach((observer) => observer(value));
  }

  subscribe(func) {
    this.observers.push(func);
  }

  unsubscribe(func) {
    this.observers.forEach((observer, index) => {
      if (observer === func) {
        this.observers.splice(index, 1);
      }
    });
  }

  next(fn) {
    if (typeof fn === 'function') {
      this.value = fn(this.value); 
    } else {
      this.value = fn;
    }

    this.notify(this.value);
  }
}
