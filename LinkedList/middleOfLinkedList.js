class Node {
  constructor(node) {
    this.node = node;
    this.next = null;
  }
}

const node = new Node(1);
node.next = new Node(2);
node.next.next = new Node(3);
node.next.next.next = new Node(4);
node.next.next.next.next = new Node(5);
node.next.next.next.next.next = new Node(6);
node.next.next.next.next.next.next = new Node(7);
node.next.next.next.next.next.next.next = new Node(8);
node.next.next.next.next.next.next.next.next = new Node(9);


function middleOfLinkedList(node) {

  let slowPointer = node;
  let fastPointer = node;

  while (fastPointer && fastPointer.next) {
    slowPointer = slowPointer.next;
    fastPointer = fastPointer.next.next;
  }
  return slowPointer;
}

console.log(middleOfLinkedList(node));
