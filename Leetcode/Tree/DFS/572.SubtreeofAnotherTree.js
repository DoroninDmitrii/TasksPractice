class TreeNode {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

let root = new TreeNode(3);
root.left = new TreeNode(4);
root.right = new TreeNode(5);
root.left.left = new TreeNode(4);
root.left.left.left = new TreeNode(1);
root.left.left.right = new TreeNode(2);

let root2 = new TreeNode(4);
root2.left = new TreeNode(1);
root2.right = new TreeNode(2);

const isSubtree = (root, subRoot) => {
    const stack = [root];

    while (stack.length > 0) {
      const node = stack.pop();

      if (isTheSame(node, subRoot)) {
        return true;
      }

      if (node.left) {
        stack.push(node.left);
      }

      if (node.right) {
        stack.push(node.right);
      }
    }
    return false;
};

const isTheSame = (node, subRoot) => {
  const stack = [[node, subRoot]];

  while (stack.length > 0) {
    const [node, subRoot] = stack.pop();

    if (!node || !subRoot || node.val !== subRoot.val) {
      return false;
    }

    if (node.left) {
      stack.push([node.left, subRoot.left])
    }

    if (node.right) {
      stack.push([node.right, subRoot.right])
    }
  }
  return true;
}

console.log(isSubtree(root, root2));


