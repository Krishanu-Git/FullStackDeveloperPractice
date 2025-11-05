async function dividends() {
    try{const res = await fetch("https://api.massive.com/v3/reference/dividends?apiKey=wlhQfx2R3i0tHuFuxOZL6DeLSOZhE9W6")
    const data = await res.json()
    return data}
    catch (err) {
        console.log("unable to fetch the dividend")
    }
}

dividends()
    .then(data => {
        console.log(data)
        const sum = data['results'].reduce(
            (acc, num) => {return acc + num['cash_amount']}, 0
        )
        console.log(Number(sum.toFixed(4)))
    })