const savebtn = document.getElementById("save-btn");
const inputhtml = document.getElementById("input-field");
let listhtml = document.getElementById("list");



let myleads = []

savebtn.addEventListener("click", function save() {
    myleads.push(inputhtml.value)
    renderleads();
    clear();
})


function renderleads() {
    let listitems = "";

    for (let i = 0; i < myleads.length; i++) {
        listitems += `
        <li>
            <a href = '${myleads[i]}' target='_blank'> 
            ${myleads[i]} 
            </a>
        </li>`
    }
    listhtml.innerHTML = listitems;
}

function clear() {
    inputhtml.value = "";
}