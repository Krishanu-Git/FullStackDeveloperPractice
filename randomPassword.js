const keys = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
let randomPassword = () => {
  let password = "";
  for (let i = 0; i < 15; i++) {
    password += keys.charAt(Math.floor(Math.random() * keys.length));
  }
  return password;
};

function generatePassword() {
  document.querySelector("#p1").textContent = randomPassword();
  document.querySelector("#p2").textContent = randomPassword();
}

function copyPassword(id) {
  let passwordText = document.querySelector(id).textContent;
  navigator.clipboard.writeText(passwordText).then(() => {
    alert("Password copied to clipboard!");
  });
}

document.querySelector("#p1").addEventListener("click", () => {
  copyPassword("#p1");
});

document.querySelector("#p2").addEventListener("click", () => {
  copyPassword("#p2");
});
