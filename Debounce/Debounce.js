function fetchUrl(url) {
  console.log(`fetching ${url}...`, this.firstName)
}

const user = {
  firstName: 'Bob'
}

function debounce(callback, delay) {
  let timer = null;
  return (...arg) => {

    if (timer) {
      clearTimeout(timer)
    }

    timer = setTimeout(() => {
      callback(...arg)
    }, delay)
  }
}


const fetching = debounce(fetchUrl.bind(user), 300)

fetching(1)
fetching(2)
fetching(3)
fetching(4)
fetching(5)

