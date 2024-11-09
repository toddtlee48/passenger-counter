let count = 0;
let saveEl = document.getElementById('save-el');
let countEl = document.getElementById('count-el');

function increment() {
  count = count + 1;
  countEl.textContent = count;
  console.log(count);
}

function save() {
  let countStr = count + ' - ';
  saveEl.textContent += countStr;
}

function clearOut() {
  count = 0;
  countEl.textContent = count;
  saveEl.textContent = 'Previous entries :';
}
