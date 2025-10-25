
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

let exerciseTime = 7
const message = exerciseTime < 30 ? 'you need to work harder' : exerciseTime > 30 && exerciseTime < 60 ? 'Doing good!' : 'Excellent!'
console.log(message)

function selectItems(items) {
    let price = 0;
    switch(items) {
        case 'coffee':
            price = 2
            break
        case 'sandwiches':
            price = 5
            break
        case 'salad':
            price = 4
            break
        case 'lemon cake':
            price = 3
            break
        default:
            return `Sorry, we don't sell ${items}`
    }
    return `you selected ${items} worth $${price}`
}

console.log(selectItems('sandwiches'))

const dreamHoliday = {
    destination: 'Ladakh',
    activity: 'riding bike',
    accomodation: 'tent',
    companion: 'friends'
}

function logAnswer() {
    console.log("The answer is 5!")
}

console.log("what is 2 + 3 ?")
setTimeout(logAnswer, 4000)

const {destination, activity, accomodation, companion} = dreamHoliday
console.log(destination, activity, accomodation, companion)


let speedWarning = speed => `you are going at ${speed} mph`
console.log(speedWarning(50))