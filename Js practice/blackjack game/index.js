let player = {
    name: "Akif",
    chips: 36
}

let sum = 0;
let isAlive = true;
let hasBlackJack = false;

let message = document.getElementById("message");

let cardhtml = document.getElementById("card");
let sumhtml = document.getElementById("sum");
let playerhtml = document.getElementById("player-el");

let newbutton = document.getElementById("new");

newbutton.style.opacity = 0;

function playerinfo() {
    playerhtml.innerHTML = player.name + ": " + player.chips;
}

function reset() {
    sum = 0;
    cardhtml.innerHTML = "Card:";
    sumhtml.innerHTML = "Sum: ";
    isAlive = true;
    hasBlackJack = false;
    message.innerHTML = "Want to play a round?";
}

function draw() {
    let carddrawn = Math.floor(Math.random() * 13) + 1;
    if (carddrawn > 10) {
        carddrawn = 10;
    }
    else if (carddrawn === 1) {
        carddrawn = prompt("Ace, Choose 1 or 11");
        carddrawn = parseInt(carddrawn);
        console.log(carddrawn)
    }
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
        player.chips += 5;
        playerinfo();
    }
    else {
        message.innerHTML = "You Lost";
        newbutton.style.opacity = 0;
        isAlive = false;
        player.chips -= 5;
        playerinfo();
    }
}

function start() {
    if (isAlive === false || hasBlackJack === true) {
        reset();
    }
    if (sum === 0) {
        playerinfo();
        draw();
        draw();
        if (sum > 0 && sum < 21) {
            newbutton.style.opacity = 1;
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

console.log(isAlive, hasBlackJack)