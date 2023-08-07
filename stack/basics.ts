// Object Oriented Programming (OOP)
// Stack Class = Blueprint for this object
// Last-In-First-Out (LIFO)
// When you push data into the stack, it will be added to the top of the stack

// Stack is an object
// items is key/properties

class Stack<T> {
  // Private: Only accessible within the class
  private items: T[] = [];
  // Initialize the items properties in empty object/arrays depending on use-case. .items is properties
  constructor() {
    this.items = [];
  }

  push(value: T): void {
    this.items.push(value);
  }

  pop() {
    return this.items.pop();
  }

  peek(): T {
    return this.items[this.items.length - 1];
  }
}

const stack = new Stack<number>();
console.log(stack);

stack.push(2);
console.log(stack);
/*Stack { items: [] }
Stack { items: [ 2 ] } */
stack.push(10);
console.log(stack);
/* Stack { items: [] }
Stack { items: [ 2 ] }
Stack { items: [ 2, 10 ] } */
stack.pop();
console.log(stack);

console.log(stack.peek());
