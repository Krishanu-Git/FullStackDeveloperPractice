
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


let arr = [10,20,30,40,50,60]
console.log(arr.reduce((acc, start) => {return acc + start}, 0))


let setPermissions = (permissionLevel, ...name) => {
    // console.log(`${name} has ${permissionLevel} level permission`)
    name.forEach(name => console.log(`${name} has ${permissionLevel} level permission`))
}

setPermissions('admin', "Krishanu", "Dave", "John")

let recursiveCall = n => {
    if (n==0)
        return 0;
    return n + recursiveCall(n-1);
}

console.log(recursiveCall(10))


const arr2 = ['a','a','a','a','c','b'];
console.log(arr2.reduce((acc, item) => {
    if (acc[item])
        acc[item]++;
    else
        acc[item] = 1;
    return acc;
}, {}))

const names = ['alice', 'bob', 'charlie'];
// Expected Output: ['ALICE', 'BOB', 'CHARLIE']
console.log(names.map((name) => name.toUpperCase()))

const celsiusTemps = [0, 10, 20, 30, 40];
// Expected Output: [32, 50, 68, 86, 104]
console.log(celsiusTemps.map(ct => (ct * 9)/5 + 32))

const users = [
  { id: 101, name: 'Sasha' },
  { id: 102, name: 'Leo' },
  { id: 103, name: 'Mila' }
];
// Expected Output: [101, 102, 103]
console.log(users.map((user) => user.id))

const allUsers = [
  { name: 'Eva', isPremium: true },
  { name: 'Dan', isPremium: false },
  { name: 'Omar', isPremium: true },
  { name: 'Mia', isPremium: false }
];
// Expected Output: [{ name: 'Eva', isPremium: true }, { name: 'Omar', isPremium: true }]
console.log(allUsers.filter(user => user.isPremium === true))

const words = ['log', 'computer', 'cat', 'database', 'pen'];
// Expected Output: ['computer', 'database']
console.log(words.filter(word => word.length > 5))

const values = [5, 10, -3, 45, 2];
// Expected Output: 45
console.log(values.reduce((acc, value) => {
    if (value > acc)
        acc = value
    return acc
}, -1))


const nested = [[1, 2], [3, 4], [5, 6]];
// Expected Output: [1, 2, 3, 4, 5, 6]
console.log(nested.reduce((acc, arr) => {
    return acc.concat(arr)
},[]))

const cart = [
  { item: 'Laptop', price: 1200 },
  { item: 'Mouse', price: 50 },
  { item: 'Keyboard', price: 150 }
];
// Expected Output: 1400
console.log(cart.reduce((acc, arr) => {
    return acc + arr.price;
}, 0))


const players = [
  { name: 'Player 1', score: 100, isActive: true },
  { name: 'Player 2', score: 200, isActive: false },
  { name: 'Player 3', score: 50, isActive: true },
  { name: 'Player 4', score: 150, isActive: true }
];
// Expected Output: 300 (100 + 50 + 150)
console.log(players.filter(player => player.isActive === true).reduce((acc, p) => {return acc + p.score},0))