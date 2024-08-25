class TreeNode {
  constructor(val = 0, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

let root = new TreeNode(3);
root.left = new TreeNode(9);
root.right = new TreeNode(20, new TreeNode(15), new TreeNode(7));


const maxDepth = (root) => {

  const stack = [root];
  let depth = 0;

  while (stack.length > 0) {
    const levelSize = stack.length;

    for (let i = 0; i < levelSize; i++) {
      const node = stack.pop();

      if (node.left) {
        stack.push(node.left);
      }

      if (node.right) {
        stack.push(node.right);
      }
    }
    depth++;
  }
  return depth;
};

console.log(maxDepth(root));
