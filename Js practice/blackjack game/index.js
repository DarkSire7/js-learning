let sum = 0;

function bj() {
    let firstCard = Math.ceil(Math.random() * 10) + 1;
    sum += firstCard;
}


function check() {
    if (sum < 21) {
        console.log("Pick another card? D:")
        bj();
        console.log(sum);
        check();
    }
    else if (sum === 21) {
        console.log("YOU WON :D")
    }
    else {
        console.log("You Lost :(")
    }
}

bj();
bj();

console.log(sum);
check();
