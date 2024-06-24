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

const averageOfLevels = (root) => {
  const queue = [root]
  let averageOfLevels = []
  
  while (queue.length) {
    const length = queue.length
    let sum = 0

    for (let i = 0; i < length; i++) {
      let root = queue.shift()
      sum += root.val

      if (root.left) {
        queue.push(root.left)
      }

      if (root.right) {
        queue.push(root.right)
      }
    }
    averageOfLevels.push(sum / length)
  }
  return averageOfLevels
}

console.log(averageOfLevels(root))
