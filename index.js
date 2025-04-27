let count = 0;

let countEl = document.getElementById('count');
let textEl = document.getElementById('prev-data');

function increment() {
    count++;
    countEl.textContent = count;
}

function decrement() {
    count--;
    countEl.textContent = count;
}

function reset() {
    count = 0;
    countEl.textContent = 0;
}

function save(){
    let string = count + " - "
    textEl.textContent += string;
}

