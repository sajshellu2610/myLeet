
var LRUCache = function(capacity) {
    this.capacity = capacity;
    this.cache = new Map();
};

LRUCache.prototype.get = function(key) {
    if (!this.cache.has(key)) {
        return -1;
    }

    const value = this.cache.get(key);

    // Move recently used key to the end
    this.cache.delete(key);
    this.cache.set(key, value);

    return value;
};

LRUCache.prototype.put = function(key, value) {
    // Remove existing key before updating
    if (this.cache.has(key)) {
        this.cache.delete(key);
    }

    // Insert key as most recently used
    this.cache.set(key, value);

    // Remove least recently used key
    if (this.cache.size > this.capacity) {
        const oldestKey = this.cache.keys().next().value;
        this.cache.delete(oldestKey);
    }
};
