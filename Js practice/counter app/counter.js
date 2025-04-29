let count = 0;
let counthtml = document.getElementById("count");
let saveel = document.getElementById("record");

function increment() {
    count = count + 1;
    counthtml.innerHTML = count;
}

function decrement() {
    count = count - 1;
    counthtml.innerHTML = count;
}

function reset() {
    count = 0;
    counthtml.innerHTML = count;
}

function save() {
    let value = count + " - "
    saveel.innerHTML += value;
}

