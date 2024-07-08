// Написать функцию, которая принимает объект и возвращает итератор,
// который обходит объект по элементам. Генераторы использовать нельзя.
// [1, 2]
// Array.from(objToIterator({ a: 1, b: 2 }));

const objToIterator = (obj) => {
  const entries = Object.entries(obj);
  let index = 0;

  return {
    [Symbol.iterator]: function () {
      return this;
    },

    next: function () {
      if (index < entries.length) {
        const [key, value] = entries[index++];
        return { value: value, done: false };
      } else {
        return { done: true };
      }
    }
  };
}

const iterator = objToIterator({ a: 1, b: 2 });
console.log(Array.from(iterator));

