class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

let root = new Node(3);
root.left = new Node(9);
root.right = new Node(20);
root.left.left = new Node(15);
root.left.right = new Node(7);

const minDepthOfTree = (root) => {

  if (!root) return null

  let depth = 0;

  let queue = [root] 

  while (queue.length) {
    //every level nodes number
    let queueLen = queue.length

    for (let i = 0; i < queueLen; i++) {
      //first node out
      let current = queue.shift()

      if (!current.left && !current.right) {
        depth++
        return depth
      }
      //if node has children, push it to the queue
      if (current.left) queue.push(current.left)
      if (current.right) queue.push(current.right)
    }
    depth++
  }
return depth
}

console.log(minDepthOfTree(root))
