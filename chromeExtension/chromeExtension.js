let myLeads = []

const inputEl = document.querySelector("#input-el")
const inputBtn = document.querySelector("#input-btn")
const ulEl = document.getElementById("ul-el")
const tabBTn = document.querySelector("#tab-btn")

// localStorage.setItem("myLeads","www.google.com")
// console.log(localStorage.getItem("myLeads"))
let localStorageArray = JSON.parse(localStorage.getItem("myLeads"))
myLeads = (localStorageArray) ? localStorageArray : [];
if (localStorageArray){
    renderElement(myLeads)
}

inputBtn.addEventListener("click" , () => {
    console.log("button clicked !!!");
    myLeads.push(inputEl.value);
    localStorage.setItem("myLeads", JSON.stringify(myLeads))
    renderElement(myLeads);
    console.log(myLeads);
    inputEl.value = "";
});

function renderElement(leads) {
    let items = "";
    for (let i=0; i<leads.length; i++) {
        // items = "<li>"+myLeads[i]+"</li>"
        // const li = document.createElement("li");
        // li.textContent = myLeads[i];
        // ulEl.append(li)
        items += `
            <li>
                <a target="_blank" href='${leads[i]}'>
                    ${leads[i]}
                </a>
            </li>
        `
    };
    ulEl.innerHTML = items;
    // let item = "<li><a href=" + inputEl.value + " target=\"_blank\">"+inputEl.value+"</a></li>"
    // let item = `
    // <li>
    //     <a href="${inputEl.value}" target="_blank">
    //         ${inputEl.value}
    //     </a>
    // </li>
    // `
    // ulEl.innerHTML += item;
};

document.querySelector("#delete-btn").addEventListener("dblclick", () => {
    localStorage.clear();
    console.log("cleared the local storage");
    myLeads = [];
    console.log("reset the myLeads and rending the DOM")
    renderElement(myLeads);
})

// const tabs = [{
//     url: "https://www.yt.com"
// }]

tabBTn.addEventListener("click", () => {
    chrome.tabs.query({active: true, currentWindow: true}, (tabs) => {
        console.log(tabs)
        myLeads.push(tabs[0].url)
        localStorage.setItem("myLeads", JSON.stringify(myLeads) )
        renderElement(myLeads)
    })
})