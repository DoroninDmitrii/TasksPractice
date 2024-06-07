class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

// let root = new Node(5)
// root.left = new Node(4)
// root.right = new Node(8)
// root.left.left = new Node(11);
// root.right.left = new Node(13)
// root.right.right = new Node(4);
// root.left.left.left = new Node(7);
// root.left.left.right = new Node(2);
// root.right.right.left = new Node(5);
// root.right.right.right = new Node(1);

let root = new Node(10);
root.left = new Node(8);
root.right = new Node(2);
root.left.left = new Node(3);
root.left.right = new Node(5);
root.right.left = new Node(2);

function hasPathSum(root, targetSum) {
  if (!root) return false

  if (!root.left && !root.right && targetSum === root.val) return true

  return hasPathSum(root.left, targetSum - root.val) || hasPathSum(root.right, targetSum - root.val)
}

console.log(hasPathSum(root, 21))
