class Singleton {
  static instance = null;

  constructor() {
    if (Singleton.instance) {
      return Singleton.instance;
    }
    Singleton.instance = this;
  }
}


const first = new Singleton();
const second = new Singleton();

console.log(first === second); // true
