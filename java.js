const button = document.querySelector('.togglebutton')
const buttoncircle = document.querySelector('.buttoncircle')
const body = document.querySelector('body')
const mono = document.querySelector('.mono')
const inputdiv = document.querySelector('.inputdiv')
const input = document.querySelector('.input')
const keyboard = document.querySelector('.keyboard')
const noun = document.querySelector('.noun')
const li = document.querySelector('.litxt')
const li1 = document.querySelector('.litxt1')
const li2 = document.querySelector('.litxt2')
const li3 = document.querySelector('.litxt3')
const verb = document.querySelector('.verb')
const https = document.querySelector('.https')
const Moon = document.querySelector(".moon")
const burgermenu = document.querySelector(".hide")


button.addEventListener('click',() => {
    button.classList.toggle('active')
    
    buttoncircle.classList.toggle('night')
    body.classList.toggle('night')
    mono.classList.toggle('night')
    inputdiv.classList.toggle('night')
    input.classList.toggle('night')
    keyboard.classList.toggle('night')
    noun.classList.toggle('night')
    li.classList.toggle('night')
    li1.classList.toggle('night')
    li2.classList.toggle('night')
    li3.classList.toggle('night')
    verb.classList.toggle('night')
    https.classList.toggle('night')
    Moon.classList.toggle('night')
    burgermenu.classList.toggle('night')
})