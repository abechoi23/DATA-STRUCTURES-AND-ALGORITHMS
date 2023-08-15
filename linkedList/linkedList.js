// Linked List Diagram:

// [head]  --> [node1] --> [node2] --> [node3] --> [newNode] --> [null]
//            (value1)    (value2)    (value3)
// (next: value2)                 (next: null)

class LinkedListNode {
  // Constructor initalizes the object with values you define
  // this. refers the current object
  // if no arg value is passed next, it defaults to null
  constructor(value, next = null) {
    this.value = value;
    this.next = next;
  }
}

const exampleNode = new LinkedListNode(5, null);
console.log(exampleNode);
// LinkedListNode { value: 5, next: null }

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }
  // Method to add a new node to end of the list
  append(value) {
    const newNode = new LinkedListNode(value);
    // if tail is not null or undefined
    // if tail is truthy
    // If current list has a tail node, tail is the last node in the linked list
    if (this.tail) {
      // set next property of the node to be new Node
      this.tail.next = newNode;
      // current tail (last) is the new node
      this.tail = newNode;
    } else {
      // In a linked list, if theres only one node in the list, the head and tail are the same node
      this.head = newNode;
      // newNode Object which contains value and next properties is assigned to the tail property which is part of the LinkedList class/object
      this.tail = newNode;
    }
  }
  delete(value) {

    if (!this.head) {
        return;
    }
    if (this.head.value === value) {
        this.head = this.head.next 
    }
    return
  }
}


const exampleLinkList = new LinkedList();
console.log(exampleLinkList);
// LinkedList { head: null, tail: null }

exampleLinkList.append(1);
console.log(exampleLinkList);
/* LinkedList {
  head: LinkedListNode { value: 1, next: null },
  tail: LinkedListNode { value: 1, next: null }
} */

exampleLinkList.append(5);
console.log(exampleLinkList);
/* LinkedList {
  head: LinkedListNode {
    value: 1,
    next: LinkedListNode { value: 5, next: null }
  },
  tail: LinkedListNode { value: 5, next: null }
} */

exampleLinkList.append(32);
console.log(exampleLinkList);
/* LinkedList {
  head: LinkedListNode {
    value: 1,
    next: LinkedListNode { value: 5, next: [LinkedListNode] }
  },
  tail: LinkedListNode { value: 32, next: null }
} */

exampleLinkList.delete(1)
console.log(exampleLinkList);







// Object Oriented Programming (OOP)
/* const exampleObject = {
  key1: "value1",
  property: "value2",
};

const brittneyCar = {
  make: "Toyota",
  model: "Camry",
};

const abesCar = {
  make: "Tesla",
  model: "model Y",
};

const juliusCar = {
  make: "Honda",
  model: "Civic",
};
 */

class Car {
  /* function intialize the object
    takes in two arg params make and model
    assigns those params to the properties of the object*/
  constructor(make, model) {
    this.make = make;
    this.model = model;
  }

  switchModel(newModel) {
    this.model = newModel;
  }
}

const brittneyCar = new Car("Toyota", "Camry");
console.log(brittneyCar);
// Car { make: 'Toyota', model: 'Camry' }
brittneyCar.switchModel("Prius");
console.log(brittneyCar);
// Car { make: 'Toyota', model: 'Prius' }
