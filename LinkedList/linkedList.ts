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
}

const list = new LinkedList();
list.push('HEY');
list.push('HI');
list.push('HI');

console.log(list.shift());
console.log(list.shift());
console.log(list.shift());
console.log(list.shift());
