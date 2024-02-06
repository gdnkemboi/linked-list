class LinkedList {
  constructor() {
    this.head = null;
  }

  append(value) {
    const newNode = new Node(value);
    if (this.head === null) {
      this.head = newNode;
      return;
    }

    let currentNode = this.head;
    while (currentNode.nextNode) {
      currentNode = currentNode.nextNode;
    }

    currentNode.nextNode = newNode;
  }

  prepend(value) {
    let currentNode = this.head;
    this.head = new Node(value, currentNode);
  }

  size() {
    let count = 0;
    let currentNode = this.head;
    while (currentNode) {
      count++;
      currentNode = currentNode.nextNode;
    }
    return count;
  }

  getHead() {
    return this.head.value;
  }

  tail() {
    let currentNode = this.head;
    while (currentNode) {
      if (!currentNode.nextNode) {
        return currentNode.value;
      }
      currentNode = currentNode.nextNode;
    }
  }

  at(index) {
    let counter = 0;
    let currentNode = this.head;
    while (currentNode) {
      if (counter === index) {
        return currentNode.value;
      }
      counter++;
      currentNode = currentNode.nextNode;
    }
    return null;
  }

  pop() {
    let previousNode;
    let currentNode = this.head;
    while (currentNode) {
      if (!currentNode.nextNode) {
        previousNode.nextNode = null;
        return;
      }
      previousNode = currentNode;
      currentNode = currentNode.nextNode;
    }
  }

  contains(value) {
    let currentNode = this.head;
    while (currentNode) {
      if (currentNode.value === value) {
        return true;
      }
      currentNode = currentNode.nextNode;
    }
    return false;
  }
  find(value) {
    let currentNode = this.head;
    let count = 0;
    while (currentNode) {
      if (currentNode.value === value) {
        return count;
      }
      currentNode = currentNode.nextNode;
      count++;
    }
    return null;
  }

  toString() {
    let string = "";
    let currentNode = this.head;
    while (currentNode) {
      if (currentNode) {
        string = string.concat(`( ${currentNode.value} ) -> `);
      }

      currentNode = currentNode.nextNode;
    }
    string = string.concat("null");
    return string;
  }

  insertAt(value, index) {
    if (index === 0) {
      this.prepend(value);
      return;
    }

    const newNode = new Node(value);
    let count = 0;
    let previousNode;
    let currentNode = this.head;

    while (currentNode) {
      if (count === index) {
        previousNode.nextNode = newNode;
        newNode.nextNode = currentNode;
        return;
      }
      previousNode = currentNode;
      currentNode = currentNode.nextNode;
      count++;
    }
  }

  removeAt(index) {
    if (index === 0) {
      let currentNode = this.head;
      this.head = currentNode.nextNode;
      return;
    }
    let count = 0;
    let previousNode;
    let currentNode = this.head;

    while (currentNode) {
      if (count === index) {
        previousNode.nextNode = currentNode.nextNode;
        return;
      }
      previousNode = currentNode;
      currentNode = currentNode.nextNode;
      count++;
    }
  }
}

class Node {
  constructor(value, nextNode = null) {
    this.value = value;
    this.nextNode = nextNode;
  }
}
