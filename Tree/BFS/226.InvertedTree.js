class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

let root = new Node(4);
root.left = new Node(2);
root.right = new Node(7);
root.left.left = new Node(1);
root.left.right = new Node(3);
root.right.left = new Node(6);
root.right.right = new Node(9);

const invertTree = root => {
  const queue = [root];
  const result = [];

  while (queue.length > 0) {
    const current = queue.shift();

    result.push(current.val);

    if (current.left) {
      queue.push(current.right);
    }

    if (current.right) {
      queue.push(current.left);
    }
  }
  return result;
};

console.log(invertTree(root))
