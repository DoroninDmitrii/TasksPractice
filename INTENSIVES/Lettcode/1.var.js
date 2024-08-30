// 1

// for (let i = []; i.length < 3; i.push(1)) {
//   let val = [...i];
//     setTimeout(function () {
//       console.log(val)
//     }, i.length * 1000);
// }

// 2

// for (var i = []; i.length < 3; i.push(1)) {
//     setTimeout(function () {
//       console.log(i);
//     }, i.length * 1000);
// }

// 3

// for (var i = 0; i < 3; i++) {
//   let val = i;
//   setTimeout(function() {
//   console.log(val)
//   }, i.length * 1000);
// }

// 4

var fns = [];

for (var i = 0; i++ < 3;) {
  fns.push(function () {
    return i + i;
  })
}

console.log(fns[0]());
// console.log(fns[1]());
