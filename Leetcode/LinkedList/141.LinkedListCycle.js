class Node {
  constructor(node) {
    this.node = node;
    this.next = null;
  }
}

const root = new Node(1);
root.next = new Node(2);
root.next.next = new Node(3);
root.next.next.next = new Node(4);
root.next.next.next.next = new Node(5);
root.next.next.next.next.next = root;



// const circleLinkedList = (root) => {
//   const set = new Set();
//   let current = root;

//   while(current) {
//     if (set.has(current.node)) {
//       return true;
//     }
//     set.add(current.node)
//     current = current.next;
//   } 
//   return false;
// };

// console.log(circleLinkedList(root));


const circleLinkedList = (root) => {

  let current = root;
  let currentNext = root;

  while (current !== null && currentNext !== null &&  currentNext.next !== null) {
    current = current.next;
    currentNext = currentNext.next.next;

    if (current === currentNext) {
      return true;
    }
  }
  return false;
};

console.log(circleLinkedList(root));
