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
    // start from head node if null
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
}

linkedListClass = new LinkedListClass();
linkedListClass.append(1);
linkedListClass.append(2);
linkedListClass.append(3);
linkedListClass.prepend(0);
console.log(linkedListClass.size());
