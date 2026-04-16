class LinkNode {
  constructor(key = 0, val = 0) {
    this.key = key;
    this.val = val;
      this.pre = null;
    this.next = null;
  
  }
}

class LRUCache {
  constructor(cap) {
    this.map = new Map();
    this.cap = cap;
    this.head = new LinkNode();
    this.tail = new LinkNode();
    this.head.next = this.tail;
    this.tail.pre = this.head;
  }
  removeNode(node) {
    node.pre.next = node.next;
    node.next.pre = node.pre;
  
  }
  addToFront(node) {
    node.pre = this.head;
    node.next = this.head.next;
    this.head.next.pre = node;
    this.head.next = node;
  }
  get(key) {
    if (!this.map.has(key)) return -1;
    let node = this.map.get(key);
    this.removeNode(node);
    this.addToFront(node);
    return node.val;
  }
  put(key, val) {
    if (this.map.has(key)) {
      let node = this.map.get(key);
      node.val = val;
      this.removeNode(node);
      this.addToFront(node);
      return;
    }
    let node = new LinkNode(key, val);
    if (this.map.size === this.cap) {
      let lru = this.tail.pre;
      this.removeNode(lru);
      this.map.delete(lru.key);
    }
    this.addToFront(node);
    this.map.set(key, node);
  }
}


