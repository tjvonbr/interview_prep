// Node Class
class Node {
  constructor(value) {
    this.value = value;
    this.next = null
  }
}

// Linked List Class
class LinkedList {
  constructor(value) {
    this.head = {
      value: value,
      next: null
    };
    this.tail = this.head;
    this.length = 1;
  }

  // Append method
  append(value) {
    const newNode = new Node(value)
    this.tail.next = newNode;
    this.tail = newNode;
    this.length++;
    return this;
  }

  // Prepend method
  prepend(value) {
    const newNode = new Node(value)
    newNode.next = this.head
    this.head = newNode;
    this.length++;
    return this;
  }

  // Insert method
  insert(index, value) {
    if (index >= this.length) {
      return this.append(value)
    }
    const newNode = new Node(value)

    const leader = this.traverseToIndex(index-1);
    const holdingPointer = leader.next;
    leader.next = newNode;
    newNode.next = holdingPointer;
    this.length++
    return this.printList()
  }

  // Remove method
  remove(index) {
    let counter = 0
    let currentNode = this.head

    const leader = this.traverseToIndex(index-1);
    const nodeToDelete = leader.next;
    leader.next = nodeToDelete.next;
    this.length--;
    return this.printList();
  }

  // Traverse method
  traverseToIndex(index) {
    let counter = 0;
    let currentNode = this.head;

    while (counter !== index) {
      currentNode = currentNode.next;
      counter++;
    }
    return currentNode
  }

  // Print method
  printList() {
    const array = [];
    let currentNode = this.head;

    while (currentNode !== null) {
      array.push(currentNode.value);
      currentNode = currentNode.next;
    }
    return array;
  }

  // Reverse method
  reverse() {
    if (!this.head.next) {
        return this.head;
    }
    let first = this.head;
    this.tail = this.head;
    let second = first.next;
    while (second) {
        const temp = second.next;
        second.next = first;
        first = second;
        second = temp;
    }
    this.head.next = null;
    this.head = first;
    return this.printList()
  }
}

// const newLinkedList = new LinkedList(10);
// newLinkedList.append(5);
// newLinkedList.append(16);
// newLinkedList.prepend(22);
// newLinkedList.insert(2, 99);
// newLinkedList.remove(2)
// newLinkedList.remove(2)