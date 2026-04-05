class ListNode {
    constructor(key = 0, val = 0) {
        this.key = key;
        this.val = val;
        this.prev = null;
        this.next = null;
    }
}

class LRUCache {
    constructor(capacity) {
        this.capacity = capacity;
        this.map = new Map();           // key → node
        
        // Dummy nodes
        this.head = new ListNode();
        this.tail = new ListNode();
        this.head.next = this.tail;
        this.tail.prev = this.head;
    }

    // Remove a node from anywhere (O(1))
    removeNode(node) {
        node.prev.next = node.next;
        node.next.prev = node.prev;
    }

    // Add node right after head (Most Recent)
    addToFront(node) {
        node.prev = this.head;
        node.next = this.head.next;
        this.head.next.prev = node;
        this.head.next = node;
    }

    get(key) {
        if (!this.map.has(key)) return -1;
        
        const node = this.map.get(key);
        this.removeNode(node);     // remove from current position
        this.addToFront(node);     // move to Most Recent
        return node.val;
    }

    put(key, value) {
        if (this.map.has(key)) {
            const node = this.map.get(key);
            node.val = value;      // update value
            this.removeNode(node);
            this.addToFront(node);
            return;
        }

        // New key
        const newNode = new ListNode(key, value);
        
        // If full → remove Least Recently Used
        if (this.map.size === this.capacity) {
            const lru = this.tail.prev;     // node before tail
            this.removeNode(lru);
            this.map.delete(lru.key);
        }

        this.addToFront(newNode);
        this.map.set(key, newNode);
    }
}