// First-In-First-Out

class Queue<T> {
  private items: T[] = [];

  // Add an item to the end of the queue
  enqueue(value: T): void {
    this.items.push(value);
  }

  // Remove an item from front of the queue
  dequeue(): T | undefined {
    return this.items.shift();
  }

  peek(): T | undefined {
    return this.items[0];
  }

  isEmpty(): boolean {
    return this.items.length === 0;
  }

  size(): number {
    return this.items.length;
  }
}

const numberQueue = new Queue<number>();
console.log(numberQueue);
numberQueue.enqueue(5);
console.log(numberQueue);
/* /* Queue { items: [] }
Queue { items: [ 5 ] } */
numberQueue.enqueue(10);
numberQueue.enqueue(15);
console.log(numberQueue);
/* Queue { items: [] }
Queue { items: [ 5 ] }
Queue { items: [ 5, 10, 15 ] } */
numberQueue.dequeue();
console.log(numberQueue);
/* Queue { items: [] }
Queue { items: [ 5 ] }
Queue { items: [ 5, 10, 15 ] }
Queue { items: [ 10, 15 ] } */
console.log(numberQueue.peek());
// 10
console.log(numberQueue.isEmpty());
// false
console.log(numberQueue.size());
// 2
