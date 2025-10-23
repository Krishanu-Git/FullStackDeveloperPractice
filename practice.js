
// const btnEl = document.querySelector("#btn-el")
// btnEl.innerHTML = "<button id=\"buy-btn\">Buy!</button>"



// document.querySelector("#buy-btn").addEventListener("click", () => {
//         btnEl.innerHTML += "<p>" + "Items added to cart!" + "</p>"
//     }
// )

let myLeads = `["hello"]`
myLeads = JSON.parse(myLeads)
console.log(typeof(myLeads))
myLeads.push("Hi")
console.log(JSON.stringify(myLeads))


let getFirst = (arr) => {
    return arr[0];
};

console.log(getFirst([1,0,8,9]));

let myCourses = ["learn css animations", "UI Design fundamentals"]
let displayAllCourses = (arr) => {
    console.log("My courses:")
    for (let i=0; i<arr.length; i++)
    {
        console.log(arr[i])
    }
}

displayAllCourses(myCourses)

// const lsEl = document.querySelector("#ls-el")
// // localStorage.setItem("myCourses", JSON.stringify(myCourses))
// console.log(localStorage.getItem("myCourses"))
// lsEl.innerHTML = `<p id="ls-el">${localStorage.getItem("myCourses")}</p>`

let generateSentence = (desc, arr) => {
    console.log(`The ${arr.length} ${desc} are ${arr}`)
}

generateSentence("best fruits", ["Mango", "Apple"])

const totalPrice = "420.988989776876"
console.log(Number(totalPrice).toFixed(2))