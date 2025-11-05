function preLoading (url) {
    return new Promise(
        (resolve, reject) => {
            const img = new Image()
            img.src = url
            img.alt = "An alt text"
            img.addEventListener('load', () => resolve(img))
            img.addEventListener('error', () => reject("img not loaded"))
        }
    )
}

try {
    const results = await preLoading('https://scrimba.ams3.cdn.digitaloceanspaces.com/assets/courses/gadvancedjs/scenic1.jpg')
    console.log(results)
    document.getElementById('img-container').appendChild(results)
} catch (err) {
    console.log(err)
}