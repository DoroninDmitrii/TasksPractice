// function fn() {
//   console.log('hello');

//   setTimeout(function() {
//     console.log('setTimeout1');
//   }, 0);

//   new Promise(function(resolve) {
//     resolve();
//   }).then(function() {
//     console.log('then1');
//   }).then(function() {
//     console.log('then2');
//   })

//   console.log('bye');
// }

// fn();

// setTimeout(() => console.log('setTimeout'), 0);
// function myAsync(start = 0) {
//   console.log(start);
//   return Promise.resolve(start + 1).then(myAsync);
// }

// myAsync();

function checkOrder() {
  console.log('?'); // 1

  async function asyncFn() {
    console.log('?'); // 2
    await Promise.resolve(null);
    console.log('?'); // 4
  }

  asyncFn();

  new Promise((resolve) => {
    setTimeout(() => {
      resolve();
      console.log('?'); // 5
    }, 0);
  }).then(() => {
    console.log('?'); // 6
  });

  console.log('?'); // 3
}

checkOrder();
