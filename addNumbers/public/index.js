const num1 = document.querySelector('#num1')
const num2 = document.querySelector('#num2')
const btnEl = document.querySelector('#add')
const sum = document.querySelector('#sum')

btnEl.addEventListener('click', () => {
    const sumOfNums = fetch('http://localhost:21334/add',{
        method:'POST',
        headers:{
            'Content-Type':'application/json'
        },
        body: JSON.stringify(Number(num1.value) + Number(num2.value))
    })
})