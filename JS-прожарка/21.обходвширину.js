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

// [[12], [7,  3], [9, 8, 10]]

class TreeNode {
  constructor(val = 0, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

let root = new TreeNode(12);
root.left = new TreeNode(7);
root.right = new TreeNode(3);
root.left.left = new TreeNode(9);
root.right.left = new TreeNode(8);
root.right.right = new TreeNode(10);


const BFS = (root) => {
  const queue = [root];
  const result = [];

  while (queue.length > 0) {
    const rootLevel = queue.length;
    const currentLevel = [];
    
    for (let i = 0; i < rootLevel; i++) {
      const node = queue.shift();

      currentLevel.push(node.val);

      if (node.left) {
        queue.push(node.left);
      }

      if (node.right) {
        queue.push(node.right);
      }
    }
    result.push(currentLevel);
  }
  return result;
}

console.log(BFS(root));
