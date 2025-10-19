let count = 0
count += 1
console.log("Code files edited:", count)

let myAge = 25
console.log("My age is:", myAge)

let arr = []
function fibonacci(n) {
    arr[0] = 0
    arr[1] = 1
    for (let i = 2; i < n; i++) {
        arr[i] = arr[i - 1] + arr[i - 2]
    }
    return arr
}
console.log("Fibonacci of 10 is:", fibonacci(10))

let fact = (n) => {
    if (n === 0 || n === 1) {
        return 1
    } else {
        return n * fact(n - 1)
    }
}
console.log("Factorial of 5 is:", fact(5));

let humanDogRatio = 7
console.log("My dog age is:", humanDogRatio * myAge)

let bonusPoint = 50;
console.log(bonusPoint)
bonusPoint += 50;
console.log(bonusPoint)
bonusPoint -= 75;
console.log(bonusPoint)
bonusPoint += 45;
console.log(bonusPoint)


let myName = "Krishanu"
let greeting = "Hi, My name is "
let myGreeting = greeting + myName;
console.log(myGreeting)

console.debug(5 + "4")
console.debug("5" + "4")
console.debug(5 + 4)

let largeCountries = ["Tuvalu", "India", "USA", "Indonesia", "Monaco"];
largeCountries.pop();
largeCountries.push("Pakistan");
largeCountries.shift();
largeCountries.unshift("China")
console.log(largeCountries)