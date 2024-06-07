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

// DFS

// function maxDepth(root) {
//   if (root === null) {
//     return 0;
//   }

//   let stack = [{ node: root, depth: 1 }];
//   let maxDepth = 0;

//   while (stack.length > 0) {
//     let { node, depth } = stack.pop();

//     if (node !== null) {
//       maxDepth = Math.max(maxDepth, depth);

//       if (node.left !== null) {
//         stack.push({ node: node.left, depth: depth + 1 });
//       }

//       if (node.right !== null) {
//         stack.push({ node: node.right, depth: depth + 1 });
//       }
//     }
//   }
//   return maxDepth;
// }

// console.log(maxDepth(root));

// BFS
function maxDepth(root) {
  if (root === null) {
    return 0;
  }

  let queue = [root];
  let depth = 0;

  while (queue.length > 0) {
    let levelSize = queue.length;

    for (let i = 0; i < levelSize; i++) {
      let currentNode = queue.shift();

      if (currentNode.left !== null) {
        queue.push(currentNode.left);
      }

      if (currentNode.right !== null) {
        queue.push(currentNode.right);
      }
    }
    depth++
  }
  return depth;
}



