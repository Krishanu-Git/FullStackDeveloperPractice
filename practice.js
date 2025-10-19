
const btnEl = document.querySelector("#btn-el")
btnEl.innerHTML = "<button id=\"buy-btn\">Buy!</button>"



document.querySelector("#buy-btn").addEventListener("click", () => {
        btnEl.innerHTML += "<p>" + "Items added to cart!" + "</p>"
    }
)