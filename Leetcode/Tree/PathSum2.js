class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

let root = new Node(5);
root.left = new Node(8);
root.right = new Node(4);
root.left.left = new Node(3);
root.right.right = new Node(7);

// console.log(root)

function pathSum(root, targetSum) {
  if (!root) return []
  
  let stack = []

  if (root.val === targetSum) {
    stack.push([root.val])
  }

  if (root.left) {
    pathSum(root.left, stack.push([targetSum - root.val]))
  }

  if (root.right) {
    pathSum(root.right, stack.push([targetSum - root.val]))
  }
  
  return stack
};

console.log(pathSum(root, 16))


console.log(pathSum(root, 16))
