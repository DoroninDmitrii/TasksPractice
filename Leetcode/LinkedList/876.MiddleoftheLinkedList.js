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

function middleNode(head) {

  let fast = head;
  let slow = head;

  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next
  }
  return slow
}

console.log(middleNode(node));
