class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }

  add(value) {
    const newNode = new Node(value);

    if (!this.head) {
      this.head = newNode;
    } else {
      let current = this.head;

      while (current.next) {
        current = current.next;
      }
      current.next = newNode;
    }
    this.size++;
  }

  remove(value) {
    if (!this.head) return;

    if (this.head.value === value) {
      this.head = this.head.next;
      this.size--;
      return;
    }

    let current = this.head;
    let prev = null;

    while (current) {
      if (current.value === value) {
        prev.next = current.next;
        this.size--;
        return;
      }
      prev = current;
      current = current.next;
    }
  }

  contains(value) {
    let current = this.head;

    while (current) {
      if (current.value === value) {
        return true;
      }
      current = current.next;
    }
    return false;
  }

  getSize() {
    console.log(this.size);
    return this.size;
  }

  toArray() {
    const elements = [];
    let current = this.head;

    while (current) {
      elements.push(current.value);
      current = current.next;
    }
    console.log(elements)
    return elements;
  }

  printList() {
    let current = this.head;
    let listStr = '';

    while (current) {
      listStr += current.value + '->';
      current = current.next;
    }
    listStr += 'null';
    console.log(listStr);
  }
}

const initList = new LinkedList();
initList.add(1);
initList.add(2);
initList.add(3);
initList.add(4);
initList.remove(3);
initList.contains(12);
initList.getSize();
initList.toArray();
initList.printList();


