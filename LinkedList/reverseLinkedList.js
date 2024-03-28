class Node {
  constructor(element) {
    this.element = element;
    this.next = null;
  }
}

class ReverseLinkedList {
  constructor(node) {
    let prev = null;
    let current = node;
    let next = null;

    while (current !== null) {
      next = current.next;
      current.next = prev;
      prev = current;
      current = next;
    }
    node = prev;
    return node
  }
}

const node = new Node(1);
node.next = new Node(2);
node.next.next = new Node(3);
node.next.next.next = new Node(4);


const result = new ReverseLinkedList(node);
