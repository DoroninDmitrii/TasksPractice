var i = 10;
var array = [];

while (i--) {
    array.push(function() {
     return i + i;
    });
}

console.log([
    array[0](), // -2
    array[1](), // -2
])
