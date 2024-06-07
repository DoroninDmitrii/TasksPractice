let instance;

class Counter {
  constructor(counter) {
    if (instance) {
      throw new Error('Just one instance');
    }
    this.counter = counter;
    instance = this;
  }

  getCounter() {
    return this.counter;
  }

  increment() {
    return this.counter++;
  }

  decrement() {
    return this.counter--;
  }
}

// const singleTonCounter = Object.freeze(new Counter(0));
// const secTonCounter = new Counter(0);

let instanceDB;

class DbConnection {
  constructor(url) {
    if (instanceDB) {
      throw new Error('Just one instance');
    }
    this.url = url;
    instanceDB = this;
  }

  connect() {
    console.log(`DB ${this.url} has been connected`);
  }

  disconnect() {
    console.log('DB disconnected');
  }
}

// const connection = Object.freeze(new DbConnection('mongodb://...'));
// console.log(connection.connect());

const DbConnection = url => Object.freeze({
  url,
  connect: () => console.log(`DB ${url} has been connected`),
  disconnect: () => console.log('DB disconnected'),
})

const connection = DbConnection('mongodb://...');
const connection2 = DbConnection('mongodb://...');


