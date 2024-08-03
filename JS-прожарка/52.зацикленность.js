// Дан связанный список вида:
// 1 —> 2 —> 3 —> 4 —> 5
// в котором последняя нода может вести на одну из предыдущих.
// Нужно проверить его на зацикленность и вернуть true или false.

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

const listTwo = new ListNode(1);
listTwo.next = new ListNode(2);
listTwo.next.next = listTwo;

const listThree = new ListNode(1);


// const hasCycle = (head) => {  
  
//   let current = head;
//   let currentNext = head;

//   while (current !== null && current.next !== null) {
//     current = current.next;
//     currentNext = currentNext.next.next;

//     if (current === currentNext) {
//       return true;
//     }
//   }
//   return false;
// };


const hasCycle = (head) => {  

  let node = head;
  const setObj = new Set();

  while (node) {
    if (setObj.has(node)) {
      return true;
    }
    
    setObj.add(node)
    node = node.next;
  }
  return false;
};


console.log(hasCycle(listOne)); // true
console.log(hasCycle(listTwo)); // true
console.log(hasCycle(listThree)); // false
