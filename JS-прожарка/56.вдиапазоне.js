// Дано бинарное дерево:

//        12
//          |
//   — — — — 
//  |                |  
// 7               3
//  |                |
//  |             — —
//  |            |        |         
// 9           8      10

// Нужно сложить все значения узлов, 
// которые находятся в границах диапазона от 9-и до 12-ти:

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

// const treeTwo = new TreeNode(10);
// treeTwo.left = new TreeNode(5);
// treeTwo.left.left = new TreeNode(3);
// treeTwo.left.right = new TreeNode(7);
// treeTwo.right = new TreeNode(15);
// treeTwo.right.right = new TreeNode(18);

// const treeThree = new TreeNode(10);
// treeThree.left = new TreeNode(5);
// treeThree.left.left = new TreeNode(3);
// treeThree.left.left.left = new TreeNode(1);
// treeThree.left.right = new TreeNode(7);
// treeThree.left.right.left = new TreeNode(6);
// treeThree.right = new TreeNode(15);
// treeThree.right.left = new TreeNode(13);
// treeThree.right.right = new TreeNode(18);

const sumInRange = (root, low, high) => {

  const queue = [root];
  let sum = 0;

  while (queue.length > 0) {
    const node = queue.shift();

    if (node.value >= low && node.value <= high) {
      sum += node.value;
    }

    if (node.left) {
      queue.push(node.left);
    }

    if (node.right) {
      queue.push(node.right);
    }
  }
  return sum;
}


console.log(sumInRange(treeOne, 9, 12)); // 31
// console.log(sumInRange(treeOne, 0, 12)); // 49
// console.log(sumInRange(treeOne, 9, 0)); // 0
// console.log(sumInRange(treeTwo, 7, 15)); // 32
// console.log(sumInRange(treeThree, 6, 10)); // 23
