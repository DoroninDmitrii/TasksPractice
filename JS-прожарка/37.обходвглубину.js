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

// нужно его обойти. 

// [12, 7, 9, 3, 8, 10]

class TreeNode {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

const tree = new TreeNode(12);
tree.left = new TreeNode(7);
tree.left.left = new TreeNode(9);
tree.right = new TreeNode(3);
tree.right.left = new TreeNode(8);
tree.right.right = new TreeNode(10);

const traverse = (root) => {
  let stack = [root];
  const result = [];

  while (stack.length > 0) {
    const node = stack.pop();

    result.push(node.value);

    if (node.right) {
      stack.push(node.right);
    }

    if (node.left) {
      stack.push(node.left);
    }
  }
  return result;
}

console.log(traverse(tree)); // [12, 7, 9, 3, 8, 10]



