class customElement {
  constructor(selector) {
    this.elements = document.querySelector(selector);
  }

  addClass(className) {
    return this.elements.froEach((element) => element.classList.add(className));
  }
}

const $ = (node) => {
  return new customElement(node);
}

const $node = $('check');
