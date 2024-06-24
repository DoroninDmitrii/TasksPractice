// First we have to check whether or not the linked-list is empty.If it is, we don't even bother going to the next step, and just return null. If it is not empty, we can set two pointers, one points to the forward node, the other points to the previous (pay attention that we have skipped the validation for the first node, we will deal with it at the end : )
// After the setting up, now we can start to run the loop.If the current-node's value equals to the target's value, we take a leap, let the current node equals to its next node, and set the previous node points to the current node.Else, moving two pointers(cur,prev) one step forward...
// At last, the target node will all be removed, except for the first one. For example, [1,1,1,1] 1. That is because we have skipped the checking for the first node. Let's fix it by directly checking the value of the head node, if it equals to the target value, we simply move it one node forward. That's all.

class Node {
  constructor(node) {
    this.node = node;
    this.next = null;
  }
}

const node = new Node(1);
node.next = new Node(2);
node.next.next = new Node(6);
node.next.next.next = new Node(3);

function removeElement(head, val) {
  if (!head) return null;

  let prev = head; // 1
  let current = head.next; // 2

  while (current) {
    if (current.node === val) {
      current = current.next; // 3
      prev.next = current; // 3
    } else {
      prev = current; // 2
      current = current.next // 6
    }
  }

  if (head.node === val) {
    return head.next;
  }
  return head;
}

console.log(removeElement(node, 6));


