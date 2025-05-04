const savebtn = document.getElementById("save-btn");
const tabbtn = document.getElementById("tab-btn");
const clearbtn = document.getElementById("clear-btn");


const inputhtml = document.getElementById("input-field");
let listhtml = document.getElementById("list");

let myleads = []


if (localStorage.length != 0) {
    myleads = JSON.parse(localStorage.myLeads)
}

renderleads(myleads);

savebtn.addEventListener("click", function save() {
    console.log(1)
    myleads.push(inputhtml.value)
    localStorage.setItem("myLeads", JSON.stringify(myleads));

    renderleads(myleads);
    clear();
})

tabbtn.addEventListener("click", function tab() {

    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
        myleads.push(tabs[0].url)
        console.log(tabs)
        localStorage.setItem("myLeads", JSON.stringify(myleads));

        renderleads(myleads);
    })



})

clearbtn.addEventListener("dblclick", function clear() {
    localStorage.clear();
    listhtml.innerHTML = "";
    myleads = [];

})



function renderleads(leads) {
    listitems = "";



    for (let i = 0; i < leads.length; i++) {
        listitems += `
        <li>
            <a href = '${leads[i]}' target='_blank'> 
            ${leads[i]} 
            </a>
        </li>`
    }
    listhtml.innerHTML = listitems;
}

function clear() {
    inputhtml.value = "";
}
