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
    while (reference.nextNode !== null) {
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
}

linkedListClass = new LinkedListClass();
linkedListClass.append(1);
linkedListClass.append(2);
linkedListClass.append(3);
linkedListClass.prepend(0);
console.log(linkedListClass.returnNodeAt(2));
