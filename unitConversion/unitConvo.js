const conBtn = document.querySelector("#con-btn")
const input = document.querySelector(".inpt")
const metEl = document.querySelector("#met-el")
const volEl = document.querySelector("#vol-el")
const massEl = document.querySelector("#mass-el")

let conversion = (num) => {
    // 1 meter = 3.281 feet
    // 1 liter = 0.264 gallon
    // 1 kilogram = 2.204 pound
    let meters = (num / 3.281).toFixed(3)
    let feet = (num * 3.281).toFixed(3)

    let liters = (num / 0.264).toFixed(3)
    let gallons = (num * 0.264).toFixed(3)

    let kilograms = (num / 2.204).toFixed(3)
    let pounds = (num * 2.204).toFixed(3)

    return {
        length:{
            meters: meters,
            feet: feet
        },
        volume:{
            liters: liters,
            gallons: gallons
        },
        mass:{
            kilograms: kilograms,
            pounds: pounds
        }
    }
}

conBtn.addEventListener("click", function() {
    let num = Number(input.value)
    console.log(num)
    uc = conversion(num)
    document.querySelector("#met-el").textContent = `${num} meters = ${uc.length.feet} feet | ${num} feet = ${uc.length.meters} meters`
    document.querySelector("#vol-el").textContent = `${num} liters = ${uc.volume.gallons} gallons | ${num} gallons = ${uc.volume.liters} liters`
    document.querySelector("#mass-el").textContent = `${num} kilograms = ${uc.mass.pounds} pounds | ${num} pounds = ${uc.mass.kilograms} kilograms`
})