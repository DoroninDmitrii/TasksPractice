class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

let root = new Node(11);
root.left = new Node(8);
root.left.left = new Node(3);

let root2 = new Node(10);
root2.left = new Node(8);
root2.right = new Node(2);
root2.left.left = new Node(3);
root2.left.right = new Node(5);
root2.right.left = new Node(2);

export function isSameTree(p, q) {

  const stack = []
  const stack2 = []

  if (!p || !q) return

  if (p.val === q.val) return true

  if (p.val !== q.val) {
    isSameTree(p.left, stack.push(p.left)) && isSameTree(q.right, stack2.push(q.right))
  }
return stack === stack2 ? true : false
}

console.log(isSameTree(root, root2))

