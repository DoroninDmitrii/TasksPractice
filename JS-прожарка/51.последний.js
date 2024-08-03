Array.prototype.last = function () {
  return this.length > 0 ? this[this.length - 1] : -1;
}


const arrOne = [1, 2, 3];
console.log(arrOne.last()); // 3

const arrTwo = [];
console.log(arrTwo.last()); // -1
