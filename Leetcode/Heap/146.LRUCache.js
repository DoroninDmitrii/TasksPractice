class LRUCache {
  constructor(capacity) {
    this.cache = new Map();
    this.capacity = capacity;
  }

  get(key) {
    if (!this.cache.has(key)) {
      return -1;
    }

    const value = this.cache.get(key);
    this.cache.delete(key);
    this.cache.set(key, value);
    return this.cache.get(key);
  }

  put(key, value) {
    if (this.cache.has(key)) {
      this.cache.delete(key);
    }

    this.cache.set(key, value);

    if (this.cache.size > this.capacity) {
      this.cache.delete(this.cache.keys().next().value);
    }
  }
}

let lruCache = new LRUCache(2);

lruCache.put(1, 'one');
lruCache.put(2, 'two');
console.log(lruCache.get(1));
console.log(lruCache.get(2));
lruCache.put(3, 'three');
// console.log(lruCache.get(2)); 

console.log(lruCache.cache)
