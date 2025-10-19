let myLeads = []

const inputEl = document.querySelector("#input-el")
const inputBtn = document.querySelector("#input-btn")
const ulEl = document.getElementById("ul-el")

inputBtn.addEventListener("click" , () => {
    console.log("button clicked !!!");
    myLeads.push(inputEl.value);
    renderElement();
    console.log(myLeads);
    inputEl.value = "";
});

function renderElement() {
    // let items = "";
    // for (let i=0; i<myLeads.length; i++) {
    //     items += "<li>"+myLeads[i]+"</li>"
    //     // const li = document.createElement("li");
    //     // li.textContent = myLeads[i];
    //     // ulEl.append(li)
    // };
    // let item = "<li><a href=" + inputEl.value + " target=\"_blank\">"+inputEl.value+"</a></li>"
    let item = `
    <li>
        <a href="${inputEl.value}" target="_blank">
            ${inputEl.value}
        </a>
    </li>
    `
    ulEl.innerHTML += item;
};