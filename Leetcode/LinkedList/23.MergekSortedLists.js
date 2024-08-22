class Node {
  constructor(node, next = null) {
    this.node = node;
    this.next = next;
  }
}

const lists = [
  new Node(1, new Node(4, new Node(5))),
  new Node(1, new Node(3, new Node(4))),
  new Node(2, new Node(6))
];

const mergeKListsHelper = function (nodeFirst, nodeSecond) {

  const resultLinkedList = new Node(0);
  let current = resultLinkedList;

  while (nodeFirst !== null && nodeSecond !== null) {
    if (nodeFirst.node < nodeSecond.node) {
      current.next = nodeFirst;
      nodeFirst = nodeFirst.next;
    } else {
      current.next = nodeSecond;
      nodeSecond = nodeSecond.next;
    }
    current = current.next;
  }

  if (nodeFirst !== null) {
    current.next = nodeFirst;
  }

  if (nodeSecond !== null) {
    current.next = nodeSecond;
  }
  return resultLinkedList.next;
};

const mergeKLists = (lists) => {
  if (lists.length === 0) {
    return null;
  }

  while (lists.length > 1) {
    let firstList = lists.shift();
    let secondList = lists.shift();
    const calculateMerge = mergeKListsHelper(firstList, secondList);
    lists.push(calculateMerge);
  }
  return lists[0];
};

console.log(mergeKLists(lists))


