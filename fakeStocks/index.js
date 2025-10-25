import {fakeStock} from './fakeStocks.js'

let prevPrice = null;

function getStockPrice(stockPrice) {
    const nameEl = document.querySelector('.name')
    const symbolEl = document.querySelector('.symbol')
    const priceEl = document.querySelector('.price')
    const timeEl = document.querySelector('.time')

    const {name, symbol, price, time} = stockPrice

    let pc = price > prevPrice ? 'U' : price < prevPrice ? 'D' : 'S';

    nameEl.innerText = `Name: ${name}`
    symbolEl.innerText = `Symbol: ${symbol}`
    priceEl.innerText = `Price: ${price} ${pc}`
    timeEl.innerText = `Time: ${time}`
    prevPrice = price
}

setInterval(function() {
    const stockPrice = fakeStock()
    getStockPrice(stockPrice)
}, 1500)