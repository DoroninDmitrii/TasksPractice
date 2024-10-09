function fn() {
  console.log('hello');

  setTimeout(function() {
    console.log('setTimeout1');
  }, 0);

  new Promise(function(resolve) {
    resolve();
  }).then(function() {
    console.log('then1');
  }).then(function() {
    console.log('then2');
  })

  console.log('bye');
}

fn();

setTimeout(() => console.log('setTimeout'), 0);
function myAsync(start = 0) {
  console.log(start);
  return Promise.resolve(start + 1).then(myAsync);
}

myAsync();
