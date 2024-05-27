class Node {
  constructor(node) {
    this.node = node;
    this.next = null;
  }
}

const list1 = new Node(1);
list1.next = new Node(7);
list1.next.next = new Node(12);
list1.next.next.next = new Node(15);

const list2 = new Node(2);
list2.next = new Node(5);
list2.next.next = new Node(10);
list2.next.next.next = new Node(19);


const mergeTwoLists = function (firstList, secondList) {
  let firstListPointer = firstList;
  let secondListPointer = secondList;

  let newListPointer = new Node();
  const linkedListPointer = newListPointer;

  while (firstListPointer && secondListPointer) {
    if (firstListPointer.node < secondListPointer.node) {
      newListPointer.next = firstListPointer;
      firstListPointer = firstListPointer.next;
    } else {
      newListPointer.next = secondListPointer;
      secondListPointer = secondListPointer.next;
    }

    newListPointer = newListPointer.next;
  }

  while (firstListPointer) {
    newListPointer.next = firstListPointer;
    firstListPointer = firstListPointer.next;

    newListPointer = newListPointer.next;
  }

  while (secondListPointer) {
    newListPointer.next = secondListPointer;
    secondListPointer = secondListPointer.next;

    newListPointer = newListPointer.next;
  }

  return linkedListPointer.next;
};


console.log(mergeTwoLists(list1, list2));
