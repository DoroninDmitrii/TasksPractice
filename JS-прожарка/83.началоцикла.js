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
listOne.next.next.next.next.next = listOne.next;

const findCycleStart = (head) => {
  let slow = head;
  let fast = head;

  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;

    if (slow === fast) {
      slow = head;

      while (slow !== fast) {
        slow = slow.next;
        fast = fast.next;
      }
      return slow.value;
    }
  }
  return null;
};


console.log(findCycleStart(listOne)); // 2
