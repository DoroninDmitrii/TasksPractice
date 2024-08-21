let totalCallsCount = 0;
let throttledCallsCount = 0;

const throttle = (fn, ms = 300) => {
  let timer = null;

  return function(...args) {
    let context = this;

    if (timer === 0) {
      fn.apply(context, args);
      timer = setTimeout(() => {
        timer = null
      }, ms);
    }
  }
}
const logFnCall = () => {
  console.log("всего --> ", totalCallsCount, "реальных --> ", throttledCallsCount);
}

const handleScroll = throttle(logFnCall);
