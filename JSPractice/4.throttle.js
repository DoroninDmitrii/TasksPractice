const throttle = (fn, delay) => {

  let timer = 0;

  return function(args) {
    let context = this;
    if (timer === 0) {
      fn.apply(context, args);
      timer = setTimeout(() => {
        timer = 0
      }, delay); 
    }
  }
}
