// Node Class
class Node {
  constructor(value) {
    this.value = value;
    this.next = null
    this.prev = null
  }
}

// Doubly Linked List Class
class DoublyLinkedList {
  constructor(value) {
    this.head = {
      value: value,
      next: null,
      prev: null
    };
    this.tail = this.head;
    this.length = 1;
  }

  // Append method
  append(value) {
    const newNode = new Node(value)
    this.tail.next = newNode;
    this.tail = newNode;
    newNode.prev = this.tail
    this.length++;
    return this;
  }

  // Prepend method
  prepend(value) {
    const newNode = new Node(value)
    newNode.next = this.head
    this.head.prev = newNode
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
    const follower = leader.next;
    leader.next = newNode;
    newNode.prev = leader;
    newNode.next = follower;
    follower.prev = newNode
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
    const followingNode = nodeToDelete.next;
    followingNode.prev = leader
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
}

// const doublyLinkedList = new DoublyLinkedList(10);
// doublyLinkedList.append(5);
// doublyLinkedList.append(16);
// doublyLinkedList.prepend(22);
// doublyLinkedList.insert(1, 99);
// doublyLinkedList.remove(2)
// doublyLinkedList.remove(2)
// doublyLinkedList.printList();