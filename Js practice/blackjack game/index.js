let sum = 0;
let isAlive = true;
let hasBlackJack = false;

let message = document.getElementById("message");

let cardhtml = document.getElementById("card");
let sumhtml = document.getElementById("sum");

let newbutton = document.getElementById("new");

newbutton.style.opacity = 0;

function reset() {
    sum = 0;
    cardhtml.innerHTML = "Card:";
    sumhtml.innerHTML = "Sum: ";
    isAlive = true;
    hasBlackJack = false;
}

function draw() {
    let carddrawn = Math.ceil(Math.random() * 10) + 1;
    sum += carddrawn;
    cardhtml.innerHTML += " " + carddrawn;
    sumhtml.innerHTML = "Sum: " + sum;
}

function check() {
    if (sum < 21) {
        message.innerHTML = "Pick another card?";
    }
    else if (sum === 21) {
        message.innerHTML = "YOU WON";
        newbutton.style.opacity = 0;
        hasBlackJack = true;
    }
    else {
        message.innerHTML = "You Lost";
        newbutton.style.opacity = 0;
        isAlive = false;
    }
}

function start() {
    if (isAlive === false || hasBlackJack === true) {
        reset();
    }
    if (sum === 0) {
        draw();
        draw();
        if (sum > 0 && sum < 21) {
            newbutton.style.opacity = 100;
        }

        check();
    }
}

function newcard() {
    if (isAlive === false || hasBlackJack === true || sum === 0) {
        return;
    }
    draw();
    check();

}
