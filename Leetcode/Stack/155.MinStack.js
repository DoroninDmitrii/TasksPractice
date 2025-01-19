const MinStack = function() {
  this.stack = [];
  this.minStack = [];
}

MinStack.prototype.push = function(value) {
  this.stack.push(value);
  if (this.minStack.length === 0 || value <= this.getMin()) {
    this.minStack.push(value);
  }
}

MinStack.prototype.pop = function() {
  if (this.stack.pop() === this.getMin()) {
    this.minStack.pop();
  }
}

MinStack.prototype.top = function() {
  return this.stack[this.stack.length - 1];
}

MinStack.prototype.getMin = function() {
  return this.minStack[this.minStack.length - 1];
}

const minStack = new MinStack();
minStack.push(-2);
minStack.push(0);
minStack.push(-3);
console.log(minStack.getMin()); // return -3
minStack.pop();
console.log(minStack.top());    // return 0
console.log(minStack.getMin()); // return -2
console.log(minStack, 'MIN')
