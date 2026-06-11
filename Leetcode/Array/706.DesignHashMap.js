class MyHashMap {
    constructor() {
        this.SIZE = 1000;
        this.buckets = Array.from({length: this.SIZE}, () => []);
    }

    put(key, value) {
        const idx = key % this.SIZE;
        const bucket = this.buckets[idx];

        for (let pair of bucket) {
            if (pair[0] === key) {
                pair[1] = value;
                return;
            }
        }
        bucket.push([key, value]);
    }

    get(key) {
        const idx = key % this.SIZE;
        const bucket = this.buckets[idx];

        for (let pair of bucket) {
            if (pair[0] === key) {
                return pair[1];
            }
        }
        return -1;
    }

    remove(key) {
        const idx = key % this.SIZE;
        const bucket = this.buckets[idx];

        for (let i = 0; i < bucket.length; i++) {
            if (bucket[i][0] === key) {
                bucket.splice(i, 1);
                return
            }
        }
    }
}

const myHashMap = new MyHashMap();
myHashMap.put(1, 1); // The map is now [[1,1]]
myHashMap.put(2, 2); // The map is now [[1,1], [2,2]]
myHashMap.get(1); // return 1, The map is now [[1,1], [2,2]]
myHashMap.get(3); // return -1 (i.e., not found), The map is now [[1,1], [2,2]]
myHashMap.put(2, 1); // The map is now [[1,1], [2,1]] (i.e., update the existing value)
myHashMap.get(2); // return 1, The map is now [[1,1], [2,1]]
myHashMap.remove(2); // remove the mapping for 2, The map is now [[1,1]]
myHashMap.get(2); // return -1 (i.e., not found), The map is now [[1,1]]
console.log(myHashMap)