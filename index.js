"use strict";

let linkedListClass;

class MakeNode {
  constructor(value = null, node = null) {
    (this.value = value), (this.nextNode = node);
  }
}

class LinkedListClass {
  constructor(node = null) {
    this.head = node;
  }
  append(value) {
    // loop through until reach nextNode which is null
    let ref = this.head;
    if (ref === null) {
      this.head = new MakeNode(value);
    } else {
      while (ref.nextNode !== null) {
        ref = ref.nextNode;
      }
      ref.nextNode = new MakeNode(value);
    }
  }
  prepend(value) {
    let ref = this.head;
    if (ref === null) {
      this.append(value);
    } else {
      const newNode = new MakeNode(value, ref);
      this.head = newNode;
    }
  }
  size() {
    let count = 0;
    let ref = this.head;
    while (ref) {
      count += 1;
      ref = ref.nextNode;
    }
    return count;
  }
  headNodeOfLinkedList() {
    return this.head;
  }
  tailNodeOfLinkedList() {
    let reference = this.head;
    while (reference.nextNode) {
      reference = reference.nextNode;
    }
    return reference;
  }
  returnNodeAt(nodeIndex) {
    let reference = this.head;

    for (let index = 0; index < this.size(); index++) {
      if (nodeIndex === index) {
        return reference;
      }
      reference = reference.nextNode;
    }
    return false;
  }

  pop() {
    let reference = this.head;
    if (reference === null) {
      return true;
    }

    while (true) {
      if (reference.nextNode.nextNode === null) {
        reference.nextNode = null;
        return true;
      }
      reference = reference.nextNode;
    }
  }
  contains(value) {
    let reference = this.head;
    while (reference) {
      if (reference.value === value) {
        return true;
      }
      reference = reference.nextNode;
    }
    return false;
  }
  find(value) {
    let reference = this.head;
    if (reference === null) {
      return false;
    }
    let count = 0;
    while (reference) {
      if (reference.value === value) {
        return count;
      }
      reference = reference.nextNode;
      count += 1;
    }
    return false;
  }
  toString() {
    if (this.head === null) {
      return null;
    }
    let reference = this.head;
    let nodeValseString = "";

    while (reference) {
      nodeValseString = nodeValseString + `${reference.value} ---> `;
      if (reference.nextNode === null) {
        nodeValseString = nodeValseString + ` ${null}`;
      }

      reference = reference.nextNode;
    }
    return nodeValseString;
  }
}

linkedListClass = new LinkedListClass();
linkedListClass.append(1);
linkedListClass.append(2);
linkedListClass.append(3);
linkedListClass.prepend(0);
console.log(linkedListClass.toString()); // 0
