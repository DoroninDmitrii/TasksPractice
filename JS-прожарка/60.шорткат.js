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

const treeTwo = new TreeNode(3);
treeTwo.left = new TreeNode(9);
treeTwo.right = new TreeNode(20);
treeTwo.right.left = new TreeNode(15);
treeTwo.right.right = new TreeNode(7);

const treeThree = new TreeNode(2);
treeThree.right = new TreeNode(3);
treeThree.right.right = new TreeNode(4);
treeThree.right.right.right = new TreeNode(5);
treeThree.right.right.right.right = new TreeNode(6);

const getMinDepth = (root) => {
  const queue = [root];
  let minDepth = 1;

  while (queue.length > 0) {
    const levelSize = queue.length;

    for (let i = 0; i < levelSize; i++) {
      const node = queue.shift();

      if (node.left === null && node.right === null) {
        return minDepth;
      }

      if (node.left) {
        queue.push(node.left);
      }

      if (node.right) {
        queue.push(node.right)
      }
    }
    minDepth++;
  }
  return minDepth;
}


console.log(getMinDepth(treeOne)); // 2
// console.log(getMinDepth(treeTwo)); // 2
// console.log(getMinDepth(treeThree)); // 5
