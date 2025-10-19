let firstCard = getRandomCard()
let secondCard = getRandomCard()
let sum = firstCard + secondCard
let cards = [firstCard, secondCard]

function getRandomCard() {
    let randomNumber = Math.floor(Math.random() * (11 - 2 + 1)) + 2
    return randomNumber
}
console.log("First Card: " + firstCard)
console.log("Second Card: " + secondCard)
console.log("Sum: " + sum)

function startGame() {
    document.querySelector(".card-el").textContent = "Cards: " + cards.join(" ")
    if (sum <= 20) {
        message = "Do you want to draw a new card?"
        console.log(message)
    }
    else if (sum === 21) {
        message = "Wohoo! You've got Blackjack!"
        console.log(message)
    }
    else {
        message = "You're out of the game!"
        console.log(message)
    }
    document.querySelector(".sum-el").textContent = "Sum: " + sum
    document.querySelector(".message-el").textContent = message
}

function newCard() {
    let card = getRandomCard()
    sum += card
    cards.push(card)
    console.log("New Card: " + card)
    console.log("Updated Sum: " + sum)
    startGame()
}