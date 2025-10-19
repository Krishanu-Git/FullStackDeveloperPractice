let count = 0;

function increment() {
    count += 1;
    document.getElementById("count").innerText = count;
}

function decrement() {
    count -= 1;
    document.getElementById("count").innerText = count;
}

function save() {
    let entries = document.getElementById("save-el").textContent;
    entries += count + " - ";
    count = 0;
    document.getElementById("count").textContent = count;
    document.getElementById("save-el").textContent = entries;
}