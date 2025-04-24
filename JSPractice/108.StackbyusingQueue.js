class Stack {
  constructor() {
    this.q1 = [];
    this.q2 = [];
  }

  push(x) {
    this.q2.push(x);

    while (this.q1.length > 0) {
      this.q2.push(this.q1.shift());
    }
    [this.q1, this.q2] = [this.q2, this.q1];
  }

  pop() {
    return this.q1.shift();
  }

  peek() {
    return this.q1[0];
  }

  size() {
    return this.q1.length === 0;
  }
}

const stack = new Stack();
stack.push(1);
stack.push(2);
console.log(stack.pop());
