class Node {
  constructor(node) {
    this.node = node;
    this.next = null;
  }
}

const intersection = new Node(8);

const node = new Node(4);
node.next = new Node(1);
node.next.next = intersection;
node.next.next.next = new Node(4);

const nodeSecond = new Node(5);
nodeSecond.next = new Node(6);
nodeSecond.next.next = new Node(1);
nodeSecond.next.next.next = intersection;
nodeSecond.next.next.next.next = new Node(5);

const getIntersectionNode = (node, nodeSecond) => {
  if (!node || !nodeSecond) return null;

  const hashList = new Set();

  while (node) {
    hashList.add(node)
    node = node.next;
  }

  while (nodeSecond) {
    if (hashList.has(nodeSecond)) {
      return nodeSecond;
    }
    nodeSecond = nodeSecond.next;
  }
  return null;
}

console.log(getIntersectionNode(node, nodeSecond));
