class TreeNode {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

const treeOne = new TreeNode(12);
treeOne.left = new TreeNode(7);
treeOne.left.left = new TreeNode(9);
treeOne.right = new TreeNode(3);
treeOne.right.left = new TreeNode(8);
treeOne.right.right = new TreeNode(10);

const treeThree = new TreeNode(1);
treeThree.left = new TreeNode(2);
treeThree.right = new TreeNode(3);

// const hasPathSum = (root, targetSum) => {
//   if (!root) return false;

//   if (!root.left && !root.right) {
//     return root.value === targetSum;
//   }

//   const remainingSum = targetSum - root.value;
//   return hasPathSum(root.left, remainingSum) || hasPathSum(root.right, remainingSum);
// }

const hasPathSum = (root, targetSum) => {
  if (!root) return false;

  const stack = [[root, root.value]];

  while (stack.length > 0) {
    const [currentNode, currentSum] = stack.pop();

    if (!currentNode.left && !currentNode.right && currentSum === targetSum) {
      return true;
    }

    if (currentNode.right) {
      stack.push([currentNode.right, currentSum + currentNode.right.value]);
    }

    if (currentNode.left) {
      stack.push([currentNode.left, currentSum + currentNode.left.value]);
    }
  }

  return false;
}

console.log(hasPathSum(treeOne, 23)); // true
console.log(hasPathSum(treeThree, 5)); // false
