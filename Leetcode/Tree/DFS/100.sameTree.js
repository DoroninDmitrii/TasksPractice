class TreeNode {
  constructor(val = 0, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

let rootFirst = new TreeNode(3);
rootFirst.left = new TreeNode(9);
rootFirst.right = new TreeNode(20);

let rootSecond = new TreeNode(3);
rootSecond.left = new TreeNode(9);
rootSecond.right = new TreeNode(20);

const sameTree = (rootFirst, rootSecond) => {

  const queue = [rootFirst];
  const queue2 = [rootSecond];


  while (queue.length > 0 && queue2.length > 0) {
    let node = queue.shift();
    let node2 = queue2.shift();

    if (node === null && node2 === null) {
      continue;
    }

    if (node === null || node2 === null || node.val !== node2.val) {
      return false;
    }

      queue.push(node.left, node.right)
      queue2.push(node2.left, node2.right)
  }
  return true;
}

// console.log(sameTree(rootFirst, rootSecond));


// function isSameTree(p, q) {

//   const stack = []
//   const stack2 = []

//   if (!p || !q) return

//   if (p.val === q.val) return true

//   if (p.val !== q.val) {
//     isSameTree(p.left, stack.push(p.left)) && isSameTree(q.right, stack2.push(q.right))
//   }
// return stack === stack2 ? true : false
// }

// console.log(isSameTree(root, root2))
