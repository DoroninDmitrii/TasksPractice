const people = [1,3,2,3,2]; 
const limit = 3

const numRescueBoats = (people, limit) => {
        people.sort((a, b) => a - b);
  
        let left = 0;
        let right = people.length - 1;
        let count = 0;
  
        while (left <= right) {
            const remain = limit - people[right];
            right--;
            count++;
            if (people[left] <= remain) {
                left++;
            }
        }
        return count;
    }

console.log(numRescueBoats(people, limit))