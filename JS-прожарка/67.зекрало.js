class TreeNode {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

const treeOne = new TreeNode(12);
treeOne.left = new TreeNode(7);
treeOne.right = new TreeNode(7);

const treeTwo = new TreeNode(1);
treeTwo.left = new TreeNode(2);
treeTwo.left.left = new TreeNode(3);
treeTwo.left.right = new TreeNode(4);
treeTwo.right = new TreeNode(2);
treeTwo.right.left = new TreeNode(4);
treeTwo.right.right = new TreeNode(3);

const treeThree = new TreeNode(1);
treeThree.left = new TreeNode(2);
treeThree.left.right = new TreeNode(3);
treeThree.right = new TreeNode(2);
treeThree.right.right = new TreeNode(3);

const isSymmetric = (root) => {

  if (!root) return true;

  const queue = [root.left];
  const queue2 = [root.right];

  while (queue.length > 0 && queue2.length > 0) {
    const node = queue.shift();
    const node2 = queue2.shift();

    if (!node && !node2) {
      continue;
    }

    if (!node || !node2 || node.value !== node2.value) {
      return false;
    }

    queue.push(node.left);
    queue2.push(node2.right)
    queue.push(node.right);
    queue2.push(node2.left);
  }
  return true;
}


console.log(isSymmetric(treeOne)); // true
console.log(isSymmetric(treeTwo)); // true
console.log(isSymmetric(treeThree)); // false
