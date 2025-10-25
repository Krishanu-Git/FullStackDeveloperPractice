export function fakeStock() {
    return {
        name: "QtechAI",
        symbol: "QTA",
        price: Number((Math.random() * 3).toFixed(2)),
        time: new Date().toLocaleTimeString()
    }
}