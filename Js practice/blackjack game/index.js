let sum = 0;

let message = document.getElementById("message");

let cardhtml = document.getElementById("card");
let sumhtml = document.getElementById("sum");

let newbutton = document.getElementById("new");

newbutton.style.opacity = 0;

function bj() {
    let firstCard = Math.ceil(Math.random() * 10) + 1;
    sum += firstCard;
    cardhtml.innerHTML += " " + firstCard;
    sumhtml.innerHTML = "Sum: " + sum;
}


function check() {
    if (sum < 21) {
        message.innerHTML = "Pick another card?";
    }
    else if (sum === 21) {
        message.innerHTML = "YOU WON";
        hasBlackJack = true;
    }
    else {
        message.innerHTML = "You Lost";
        isAlive = false;
    }
}




function start() {
    if (sum === 0) {
        bj();
        bj();
        newbutton.style.opacity = 100;
        check();
    }
}

function newcard() {

    bj();
    check();

}
