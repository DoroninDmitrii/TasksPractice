class ZigzagIterator {
  constructor(v1, v2) {
    this.queue = [];

    if (v1.length > 0) {
      this.queue.push({ list: v1, index: 0 });
    }

    if (v2.length > 0) {
      this.queue.push({ list: v2, index: 0 });
    }
  }

  next() {
    if (!this.hasNext()) {
      throw new Error('No more elements');
    }

    const current = this.queue.shift();
    const value = current.list[current.index];

    if (current.index + 1 < current.list.length) {
      this.queue.push({ list: current.list, index: current.index + 1});
    }

    return value;
  }

  hasNext() {
    return this.queue.length > 0;
  }
}

const v1 = [1, 2];
const v2 = [3, 4, 5, 6];

const iterator = new ZigzagIterator(v1, v2);

const result = [];

while (iterator.hasNext()) {
  result.push(iterator.next());
}

console.log(result);
