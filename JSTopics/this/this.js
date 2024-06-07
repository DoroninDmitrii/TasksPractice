// In a regular function, the this keyword refers to the object from which you call the function. In an arrow function, the this keyword refers to the object from which you define the function.
let user = {
  firstName: "Ilya",
  sayHi() {
    return () => {
      console.log(this.firstName);
    };
  }
};

const check = user.sayHi();
console.log(check()); // Logs "Ilya"

// In this case:

// When user.sayHi() is called, it returns an arrow function.
// Arrow functions do not have their own this context; instead, they capture the this value from their surrounding lexical scope. In this case, the surrounding lexical scope is the sayHi method, where this refers to the user object.
// Therefore, inside the arrow function, this.firstName still refers to user.firstName, resulting in "Ilya" being logged to the console.
// So, the crucial difference here is how this is treated in regular functions versus arrow functions. Regular functions have their this context dynamically determined at runtime based on how they are called, while arrow functions inherit this from their surrounding lexical scope, leading to different behaviors in these two cases.

let user = {
  firstName: "Ilya",
  sayHi() {
    return function () {
      console.log(this.firstName);
    };
  }
};

const check = user.sayHi();
console.log(check()); // Logs undefined

// In this case:

// When user.sayHi() is called, it returns a regular function.
// Later, when check() is called, it is called as a standalone function, not as a method of any object. Therefore, the value of this inside the function is not bound to the user object.
// In this context, this refers to the global object (or undefined in strict mode), not the user object. Since there is no firstName property in the global object, this.firstName evaluates to undefined.
// Now, let's contrast this with an arrow function:
