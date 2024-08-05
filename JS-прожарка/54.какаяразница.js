class TreeNode {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

const treeOne = new TreeNode(4);
treeOne.left = new TreeNode(2);
treeOne.right = new TreeNode(6);
treeOne.left.left = new TreeNode(1);
treeOne.left.right = new TreeNode(3);

// const treeTwo = new TreeNode(1);
// treeTwo.left = new TreeNode(0);
// treeTwo.right = new TreeNode(48);
// treeTwo.right.left = new TreeNode(12);
// treeTwo.right.right = new TreeNode(49);

// const treeThree = new TreeNode(1);
// treeThree.right = new TreeNode(3);
// treeThree.right.left = new TreeNode(2);


// const getMinDiff = (root) => {
//   const stack = [];
//   let current = root;
//   let prev = null;
//   let minDiff = Infinity;

//   while (stack.length > 0 || current !== null) {
//     while (current !== null) {
//       stack.push(current);
//       current = current.left;
//     }
//     current = stack.pop();

//     if (prev !== null) {
//       minDiff = Math.min(minDiff, current.value - prev);
//     }

//     prev = current.value;
//     current = current.right;
//   }
//   return minDiff;
// }


// console.log(getMinDiff(treeOne));
// getMinDiff(treeTwo); // 1
// getMinDiff(treeThree); // 1


const getMinDiff = (root) => {
  let prev = null;
  let minDiff = Infinity;

  const inOrderTraversal = (node) => {
    if (!node) return;

    inOrderTraversal(node.left);

    if (prev !== null) {
      minDiff = Math.min(minDiff, node.value - prev);
    }

    prev = node.value;

    inOrderTraversal(node.right);
  }

  inOrderTraversal(root);

  return minDiff;
}


console.log(getMinDiff(treeOne));
// getMinDiff(treeTwo); // 1
// getMinDiff(treeThree); // 1
