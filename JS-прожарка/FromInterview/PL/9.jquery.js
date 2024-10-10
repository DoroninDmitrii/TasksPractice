class customElement {
  constructor(selector) {
    this.elements = document.querySelectorAll(selector)
  }

  forEachElement(fn) {
    this.elements.forEach(fn)
    return this
  }

  addClass(className) {
    return this.forEachElement(el => el.classList.add(className))
  }

  toggleClass(className) {
    return this.forEachElement(el => el.classList.toggle(className))
  }

  removeClass(className) {
    return this.forEachElement(el => el.classList.remove(className))
  }

  css(styles) {
    return this.forEachElement(el => {
      for (let [key, value] of Object.entries(styles)) {
        el.style[key] = value
      }
    })
  }
  
  html(code) {
    return this.forEachElement(el => el.innerHTML = code)
  }
}
