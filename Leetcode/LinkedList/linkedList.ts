class Node{
  val: unknown;
  next: Node | null;

  constructor(val: unknown){
      this.val = val;
      this.next = null;
  }
}

export class LinkedList {
  head: Node | null;
  tail: Node | null;
  length: number;

  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }
  push(val: unknown) {
    let newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      if (this.tail) {
        this.tail.next = newNode;
        this.tail = newNode;
      }
    }
    this.length++;
    return this;
  }
  pop() {
    if (!this.head) return undefined;
    let current = this.head;
    let newTail = current;

    while (current.next) {
        newTail = current;
        current = current.next;
    }
    this.tail = newTail;
    this.tail.next = null;
    this.length--;

    if (this.length === 0) {
        this.head = null;
        this.tail = null;
    }
    return current;
  }
  shift() {
    
    if (!this.head) return undefined;
    
    let currentHead = this.head;
    this.head = currentHead.next;
    this.length--;
    
    if (this.length === 0) {
      this.tail = null;
    }

    return currentHead;
  }
  unshift(val: unknown) {

    let newNode = new Node(val);

    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }
    this.length++;
    return this;
  }
  get(index: number) {
    if (index < 0 || index >= this.length) return null;
    let counter = 0;
    let current = this.head;

    while (counter !== index) {
      current = current?.next;
      counter++;
    }
    return current;
  }
  set(index: number, val: unknown) {
    let foundNode = this.get(index);
    if (foundNode) {
      foundNode.val = val;
      return true;
    }
    return false;
  }
  insert(index: number, val: unknown) {
    if (index < 0 || index > this.length) return false;
    if (index === this.length) return !!this.push(val);
    if (index === 0) return !!this.unshift(val);

    let newNode = new Node(val);
    let prev = this.get(index - 1);
    let temp = prev.next;
    prev.next = newNode;
    newNode.next = temp;
    this.length++;
    return this;
  }
  remove(index: number) {
    if (index < 0 || index >= this.length) return undefined;
    if (index === 0) return this.shift();
    if (index === this.length - 1) return this.pop();
    let previousNode = this.get(index - 1);
    let removed = previousNode.next;
    previousNode.next = removed.next;
    this.length--;
    return removed;
  }
  reverse() {
    let node = this.head;
    this.head = this.tail;
    this.tail = node;
    let next;
    let prev = null;
    for (let i = 0; i < this.length; i++) {
      next = node.next;
      node.next = prev;
      prev = node;
      node = next;
    }
    return this;
  }
}

const list = new LinkedList();
list.push('HEY');
list.push('HI');
list.push('HI');

console.log(list.shift());
console.log(list.shift());
console.log(list.shift());
console.log(list.shift());
