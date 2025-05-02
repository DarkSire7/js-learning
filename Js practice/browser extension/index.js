const savebtn = document.getElementById("save-btn");
const inputhtml = document.getElementById("input-field");
let listhtml = document.getElementById("list");

let listitems = "";

let myleads = []
let i = 0;

savebtn.addEventListener("click", function save() {
    console.log("button clicked")
    myleads.push(inputhtml.value)
    renderleads();

})


function renderleads() {
    for (let i = 0; i < myleads.length; i++) {
        console.log(myleads[i]);
        listitems = "<li>" + myleads[i] + "</li>";
    }

    listhtml.innerHTML += listitems;
}