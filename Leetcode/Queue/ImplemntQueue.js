export class Queue {
  constructor() {
    this.items = {}
    this.frontIndex = 0
    this.backIndex = 0
  }
  enqueue(item) {
    this.items[this.backIndex] = item
    this.backIndex++
    return item + ' inserted'
  }
  dequeue() {
    const item = this.items[this.frontIndex]
    delete this.items[this.frontIndex]
    this.frontIndex++
    return item
  }
  peek() {
    return this.items[this.frontIndex]
  }
  get printQueue() {
    return this.items
  }
}

const queue = new Queue()
console.log(queue.enqueue(7))
console.log(queue.enqueue(6))
console.log(queue.enqueue(5))

console.log(queue.dequeue())
console.log(queue.peek())
console.log(queue.printQueue)

// sec var

class Node {
  constructor(value){
      this.value = value;
      this.next = null;
  }
}

class Queue {
  constructor(){
      this.first = null;
      this.last = null;
      this.size = 0;
  }
  enqueue(val) {
      let newNode = new Node(val);
      if (!this.first) {
          this.first = newNode;
          this.last = newNode;
      } else {
          this.last.next = newNode;
          this.last = newNode;
      }
      return ++this.size;
  }

  dequeue() {
      if(!this.first) return null;

      let temp = this.first;
      if (this.first === this.last) {
          this.last = null;
      }
      this.first = this.first.next;
      this.size--;
      return temp.value;
  }
}


