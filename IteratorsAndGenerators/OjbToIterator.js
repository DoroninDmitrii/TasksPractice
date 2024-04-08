// Написать функцию, которая принимает объект и возвращает итератор,
// который обходит объект по элементам. Генераторы использовать нельзя.

// [1, 2]


function objToIterator(obj) {
  let keys = Object.keys(obj);
  let i = 0;
  
  return {
    next() {
      if (keys.length <= i) {
        return {done: true};
      }
      
      let key = keys[i];
      let value = obj[key];
      
      i++;
      
      return {value, done: false}
    }
  }
}

const obj = objToIterator({a: 1, b: 2});
console.log(obj.next());
console.log(obj.next());
console.log(obj.next());
