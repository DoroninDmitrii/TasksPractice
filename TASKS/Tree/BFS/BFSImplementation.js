class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

let root = new Node(3);
root.left = new Node(9);
root.right = new Node(20);
root.left.left = new Node(15);
root.left.right = new Node(7);

const bfs = root => {
  const queue = [root];
  const result = [];

  while (queue.length > 0) {
    const current = queue.shift();

    result.push(current.val);

    if (current.left) {
      queue.push(current.left);
    }

    if (current.right) {
      queue.push(current.right);
    }
  }
  return result;
};

console.log(bfs(root));
