class TreeNode {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

let root = new TreeNode(5);
root.left = new TreeNode(4);
root.right = new TreeNode(8);
root.left.left = new TreeNode(11);
root.left.left.left = new TreeNode(7);
root.left.left.right = new TreeNode(2);
root.right.left = new TreeNode(13);
root.right.right = new TreeNode(4);
root.right.right.right = new TreeNode(1);


// recursion
// function pathSum(root, targetSum) {
//   if (!root) return false

//   if (!root.left && !root.right && targetSum === root.val) return true

//   return pathSum(root.left, targetSum - root.val) || pathSum(root.right, targetSum - root.val)
// };

// console.log(pathSum(root, 16));

function pathSum(root, targetSum) {
  if (!root) {
    return false;
  }

  const stack = [{ node: root, sum: 0 }];

  while (stack.length > 0) {
    const { node, sum } = stack.pop();
    const currentSum = sum + node.val;

    if (!node.left && !node.right && currentSum === targetSum) {
      return true;
    }

    if (node.left) {
      stack.push({ node: node.left, sum: currentSum });
    }

    if (node.right) {
      stack.push({ node: node.right, sum: currentSum });
    }
  }

  return false;
}

console.log(pathSum(root, targetSum = 22));
