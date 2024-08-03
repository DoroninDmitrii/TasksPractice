class ListNode {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
} 

const listOne = new ListNode(1);
listOne.next = new ListNode(2);
listOne.next.next = new ListNode(3);
listOne.next.next.next = new ListNode(4);

const reorderList = (head) => {
    let stack = [];
    let node = head;

    if (!node) return;

    while (node) {
      stack.push(node);
      node = node.next;
    }

    node = head;
    
    for (let i = 0; i < stack.length; i++) {
      if (i % 2 === 0) {
        node.next = stack.shift();
      } else {
        node.next = stack.pop();
      }
    }
    node.next = null;
};

console.log(reorderList(listOne));


