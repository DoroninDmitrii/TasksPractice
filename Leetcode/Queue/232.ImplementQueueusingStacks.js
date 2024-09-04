class MyQueue {
  constructor() {
    this.stack1 = [];
    this.stack2 = [];
  }

  enqueue(x) {
    this.stack1.push(x);
  }

  dequeue() {
    if (this.stack2.length === 0) {
      while (this.stack1.length > 0) {
        this.stack2.push(this.stack1.pop());
      }
    }
    return this.stack2.pop();
  }
  peek() {
    if (this.stack2.length === 0) {
      while (this.stack1.length > 0) {
        this.stack2.push(this.stack1.pop());
      }
    }
    return this.stack2[this.stack2.length - 1];
  }
  isEmpty() {
    return this.stack1.length === 0 && this.stack2.length === 0;
  }
}

const queue = new MyQueue();

queue.enqueue(1);
queue.enqueue(2);
console.log(queue.peek());    // returns 1
console.log(queue.dequeue()); // returns 1
console.log(queue.isEmpty()); // returns false
queue.enqueue(3);
console.log(queue.dequeue()); // returns 2
console.log(queue.dequeue()); // returns 3
console.log(queue.isEmpty()); // returns true
