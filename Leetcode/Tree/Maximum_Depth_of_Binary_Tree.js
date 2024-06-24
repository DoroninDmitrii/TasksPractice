// Input: root = [3,9,20,null,null,15,7]
// Output: 3

const root = [3,9,20,null,null,15,7]

const maxDepth = function(root) {

  if (root === null) {
    return 0
  } else {
    return 1 + Math.max(maxDepth(root.left))
    // 1 + Math.max(maxDepth(root.right))
  }
};


console.log(maxDepth(root))
