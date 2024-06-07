const person = {
  name: "John Doe",
  age: 42,
  email: "john@doe.com",
  country: "Canada",
};


const personProxy = new Proxy(person, {
  get: (target, prop) => {
    console.log(`The value of ${prop} is ${target[prop]}`);
    return target[prop];
  },
  set: (target, prop, value) => {
    console.log(`Changed ${prop} from ${target[prop]} to ${value}`);
    target[prop] = value;
    return Reflect.set(target, prop, value);
  }
})

console.log(personProxy.name = 'hey');
console.log(personProxy.name = 'Ivan');


// validation;

// import { isValidEmail, isAllLetters } from './validator.js';

const user = {
  firstName: 'John',
  lastName: 'Doe',
  username: 'johndoe',
  age: 42,
  email: 'john@doe.com',
};


const userProxy = new Proxy(user, {
  get: (obj, prop) => {
    return `${new Date()} | The value of ${prop} is ${Reflect.get(obj, prop)}`;
  },
  set: (obj, prop, value) => {
    if (prop === 'email') {
      if (!isValidaEmail(value)) {
        console.log('Please provide a valid email');
        return false;
      }
    }

    if (prop === 'username') {
      if (value.length < 3) {
        throw new Error('Please use a longer username');
      } else if (!isAllLetters(value)) {
        throw new Error('You can only use letters');
      }
    }

    if (prop === 'age') {
      if (typeof value !== 'number') {
        throw new Error('Please provide a valid age.');
      }
    }

    if (prop === 'age') {
      if (typeof value !== 'number') {
        throw new Error('Please provide a valid age.');
      } 
      if (value < 18) {
        throw 'User cannot be younger than 18.';
      }
    }
    return Reflect.set(obj, prop, value);
  }
})
