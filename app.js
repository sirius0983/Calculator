let myInput = document.createElement('input'),
    myButton = document.createElement('button'),
    par = document.createElement('p')
myInput.setAttribute('type', 'number')
myButton.setAttribute('type', 'button')
par.setAttribute('type', 'result')
myButton.innerText = 'Показать'
par.innerText = '12'
let body = document.querySelector('body')
body.appendChild(myInput)
body.appendChild(myButton)
body.appendChild(par)

myButton.addEventListener('click', function () {
    let prise = 100,
        age = myInput.value
    if (age < 8) {
        prise = 0
    } else if (age > 7 && age < 20) {
        prise = prise * 0.8
    } else {
        prise = prise
    }
    par.innerText = `Цена билета равна ${prise}`
})