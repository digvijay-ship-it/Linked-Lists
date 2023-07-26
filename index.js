"use strict";

const NodeFactory = (value = null, nextNode = null) => {
  return {
    value: value,
    nextNode: nextNode,
    append: function append(value) {
      if (this.nextNode === null) {
        this.nextNode = NodeFactory(value);
      } else {
        this.nextNode.append(value);
      }
    },
  };
};

let linkedListClass;

class MakeNode {
  constructor(value = null) {
    (this.value = value), (this.nextNode = null);
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
}

linkedListClass = new LinkedListClass();
linkedListClass.append(1);
linkedListClass.append(2);
linkedListClass.append(3);
console.log(linkedListClass);
