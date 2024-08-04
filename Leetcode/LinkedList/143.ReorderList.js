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
listOne.next.next.next.next = new ListNode(5);

const reorderList = (head) => {
  if (!head || !head.next || !head.next.next) return;

  let slow = head;
  let fast = head;

  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;
  }

  let prev = null;
  let current = slow;

  while (current) {
    let nextTemp = current.next;
    current.next = prev;
    prev = current;
    current = nextTemp;
  }

  let first = head;
  let second = prev;

  while(second.next) {
    let temp1 = first.next;
    let temp2 = second.next;
    
    first.next = second;
    second.next = temp1;

    first = temp1;
    second = temp2;
  }
};

function printList(head) {
  let current = head;
  let listStr = '';

  while (current) {
    listStr += current.value + '->';
    current = current.next;
  }
  listStr += 'null';
  console.log(listStr);
}

reorderList(listOne);

printList(listOne);

