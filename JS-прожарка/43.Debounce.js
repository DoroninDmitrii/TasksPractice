const debounce = (fn, timeout) => {
  let timer;

  return function (...args) {
    let context = this;
    clearTimeout(timer);
    timer = setTimeout(() => {
      fn.apply(context, args);
    }, timeout)
  }
};

const printCurrentValue = (input) => {
  console.log(input.value);
};

const handleKeyUp = debounce(printCurrentValue, 1000);

document.getElementById('inputField').addEventListener('keyup', function(event) {
  handleKeyUp(event.target);
});
