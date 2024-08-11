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

const reverseBetween = (head, left, right) => {
  let current = head;
  let start = head;
  let position = 1;

  while(position < left) {
    start = current;
    current = current.next;
    position++;
  }
  
  let reversedList = null;
  let tail = current;

  while (position >= left && position <= right) {
    const next = current.next;
    current.next = reversedList;
    reversedList = current;
    current = next;
    position++;
  }
  start.next = reversedList;
  tail.next = current;

  return left > 1 ? head : reversedList;
};

console.log(reverseBetween(node, 2, 4));
