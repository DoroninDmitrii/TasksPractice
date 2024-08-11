const data = [
  { id: 1, column2: "value 2 323", column3: "value 3 546", price: 99.99 },
  { id: 2, column2: "value 2 432", column3: "value 3 362", price: 88.88 },
  { id: 3, column2: "value 2 434", column3: "value 3 215", price: 77.77 },
  { id: 4, column2: "value 2 342", column3: "value 3 975", price: 33.54 },
  { id: 5, column2: "value 2 444", column3: "value 3 146", price: 44.44 },
  { id: 6, column2: "value 2 877", column3: "value 3 846", price: 54.45 },
  { id: 7, column2: "value 2 846", column3: "value 3 533", price: 65.34 },
  { id: 8, column2: "value 2 793", column3: "value 3 141", price: 55.55 },
  { id: 9, column2: "value 2 624", column3: "value 3 131", price: 23.54 }
];

const sortableElem = document.getElementById('sortable');
const columnHead = document.querySelectorAll('th[order]');

let current_sort_column = document.querySelector('th[order="bs"]') || document.querySelector('th[order="sb"]');

for (let i = 0; i < data.length; i++) {
  const tr = document.createElement('tr');
  sortableElem.appendChild(tr);

  data[i].dom = tr;

  const c1 = document.createElement('td');
  c1.textContent = data[i].id;

  const c2 = document.createElement('td');
  c2.textContent = data[i].column2;

  const c3 = document.createElement('td');
  c3.textContent = data[i].column3;

  const c4 = document.createElement('td');
  c4.textContent = data[i].price;

  tr.appendChild(c1);
  tr.appendChild(c2);
  tr.appendChild(c3);
  tr.appendChild(c4);
}


for (let i = 0; i < columnHead.length; i++) {
  columnHead[i].addEventListener('click', function(){
    const order = this.getAttribute('order')

    if (order === 'bs' || order === 'no') {
      this.setAttribute('order', 'sb');
      this.classList.toggle('sb');
      data.sort(sortSB(this.getAttribute('s-col')));
      reoderDom();
    } else if (order === 'sb') {
      this.setAttribute('order', 'bs');
      this.classList.toggle('bs');
      data.sort(sortBS(this.getAttribute('s-col')));
      reoderDom();
    }

    if (current_sort_column !== null && current_sort_column !== this) {
      current_sort_column.setAttribute('order', 'no');
    }
    current_sort_column = this;
  }, false);
}

function reoderDom() {
  for (let i = 0; i < data.length; i++) {
    sortableElem.appendChild(data[i].dom);
  }
}

function sortSB(column) {
  return function (a, b) {
    if (a[column] < b[column]) {
      return -1;
    }

    if (a[column] > b[column]) {
      return 1;
    }
  }
}

function sortBS(column) {
  return function (a, b) {
    if (a[column] < b[column]) { return 1; }
    if (a[column] > b[column]) { return -1; }
    return 0;
  }
}
