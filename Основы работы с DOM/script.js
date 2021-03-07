//let powerIsTrue = 24;
//console.log(powerIsTrue + powerIsTrue)
//console.log(Number.isFinite(234))
//const stringInt = '40'
//const stringFloat = '40.42'
//console.log(stringInt + 2)

//console.log(Number.parseInt(stringInt) + 2)
//console.log(+(0.4 + 0.2).toFixed(1))
//console.log(Math.sqrt(36))
//function getRandomBetween (min, max) {
//    return Math.floor(Math.random() * (max - min + 1) + min)
//}
//console.log(getRandomBetween(18, 42))
const heading = document.getElementById(123)
//const heading2 = document.querySelector('.h2-class')
const heading2 = document.querySelector('h2')
//const heading3 = heading2.nextElementSibling
const h2List = document.querySelectorAll('h2')

const heading3 = h2List[h2List.length - 1]




setTimeout ( () => { 
    addStylesTo(heading, 'JavaScript')
}, 1500)

setTimeout ( () => { 
    addStylesTo(heading2, 'Do Homework', color = 'green')
}, 3000)
const link = heading3.querySelector('a')
setTimeout ( () => { 
    addStylesTo(link, 'Everithing will be fine', color = 'blue', fontSize = '2rem')
}, 4000)


function addStylesTo(node, text, color = 'red', fontSize) {
node.textContent = text

node.style.color = color
node.style.textAlign = 'center'
node.style.backgroundColor = 'black'
node.style.padding = '2rem'
x = 'block'
node.style.width = '100%'
    if (fontSize) {
        node.style.fontSize = fontSize
    }
}


const bodybackground = document.querySelector('.bodybackground')
bodybackground.onwheel = () => {
    if (bodybackground.style.backgroundColor === 'white') {
        bodybackground.style.backgroundColor = 'grey'
    } else {
        bodybackground.style.backgroundColor = 'white'
    }
} 
heading.addEventListener('click', () => {
    if (heading.style.color === 'red') {
        heading.style.color = 'black'
        heading.style.backgroundColor = 'grey'
    } else {
        heading.style.color = 'red'
        heading.style.backgroundColor = 'black'
    }
})
heading2.addEventListener('dblclick', () => {
    if (heading2.style.color === 'green') {
        heading2.style.color = 'black'
        heading2.style.backgroundColor = 'grey'
    } else {
        heading2.style.color = 'green'
        heading2.style.backgroundColor = 'black'
    }
})
link.addEventListener('click', (event) => {
    event.preventDefault()
    console.log('CLick on link', event.target.getAttribute('href'))
    const url = event.target.getAttribute('href')
    window.location = url

})