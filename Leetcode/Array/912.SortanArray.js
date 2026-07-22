const nums = [10,9,1,1,1,2,3,1];

// Output: [1,1,1,1,2,3,9,10]

const sortArray = (nums) => {
    if (nums.length <= 1) {
        return nums;
    }

    const mid = Math.floor(nums.length / 2);

    const left = sortArray(nums.slice(0, mid));
    const right = sortArray(nums.slice(mid));

    return merge(left, right);
}

function merge(left, right) {
    const result = [];

    let i = 0;
    let j = 0;

    while (i < left.length && j < right.length) {
        if (left[i] <= right[j]) {
            result.push(left[i]);
            i++
        } else {
            result.push(right[j]);
            j++
        }
    }

    while (i < left.length) {
        result.push(left[i]);
        i++
    }

    while (j < right.length) {
        result.push(right[j]);
        j++
    }

    return result;
}


console.log(sortArray(nums));
