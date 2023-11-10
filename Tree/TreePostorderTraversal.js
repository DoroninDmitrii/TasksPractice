class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

let root = new Node(10);
root.left = new Node(8);
root.right = new Node(2);
root.left.left = new Node(3);
// root.left.right = new Node(5);
// root.right.left = new Node(15);

let postorderTraversal = function (root) {
  const stack = []

  const postOrder = (root) => {
    if (!root) return null
    
    if (root.left) {
      postOrder(root.left)
    }
    if (root.right) {
      postOrder(root.right)
    }
    stack.push(root.val)
  }
  postOrder(root)
  return stack
};

console.log(postorderTraversal(root))

// let postorderTraversal = function (root) {
//   if (!root) return []

//   let result = []
//   let stack = []

//   while (root || stack.length) {
//     if (root) {
//       stack.push(root)
//       result.unshift(root.val)
//       root = root.right
//     } else {
//       root = stack.pop()
//       root = root.left
//     }
//   }
//   return result
// };

console.log(postorderTraversal(root))
console.log(postorderTraversal(root))
console.log(postorderTraversal(root))



