let obj = {
  name: 'Jack'
};

let myFunc = function (id, city) {
  console.log(`${this.name}, ${id}, ${city}`);
};

Function.prototype.myBind = function (obj, ...args) {
  let context = this;
  return function (...newArgs) {
    context.apply(obj, [...args, ...newArgs]);
  }
};

let newFunc = myFunc.myBind(obj, 'id');
newFunc('London');



