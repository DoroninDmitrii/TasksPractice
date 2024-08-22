class Node {
  constructor(node) {
    this.node = node;
    this.next = null;
  }
}

const nodeFirst = new Node(1);
nodeFirst.next = new Node(2);
nodeFirst.next.next = new Node(3);

const nodeSecond = new Node(1);
nodeSecond.next = new Node(4);
nodeSecond.next.next = new Node(5);

const mergeTwoLinkedLists = (nodeFirst, nodeSecond) => {
  let firstListPointer = nodeFirst;
  let secondListPointer = nodeSecond;

  let resultLinkedList = new Node();
  let current = resultLinkedList;

  while (firstListPointer && secondListPointer) {
    if (firstListPointer.node < secondListPointer.node) {
      current.next = firstListPointer;
      firstListPointer = firstListPointer.next;
    } else {
      current.next = secondListPointer;
      secondListPointer = secondListPointer.next;
    }
    current = current.next; // move to the next node;
  }

  while (firstListPointer) {
    current.next = firstListPointer;
    firstListPointer = firstListPointer.next;

    current = current.next; // move to the next node; 
  }

  while (secondListPointer  ) {
    current.next = secondListPointer;
    secondListPointer = secondListPointer.next;

    current = current.next; // move to the next node; 
  }
  return resultLinkedList;
}

console.log(mergeTwoLinkedLists(nodeFirst, nodeSecond))
