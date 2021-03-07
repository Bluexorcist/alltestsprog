const body = document.querySelector('.body');
const button1 = document.querySelector('.but1');
const button2 = document.querySelector('.but2');
const button3 = document.querySelector('.but3');
const button4 = document.querySelector('.but4');
const button5 = document.querySelector('.but5');

button1.addEventListener('click', () => {
    if (button1.style.backgroundColor === 'white') {
        body.style.backgroundColor = 'red';
    } else {body.style.backgroundColor = 'red';}
    console.log('YES');
});
button2.addEventListener('click', () => {
    if (button1.style.backgroundColor === 'white') {
        body.style.backgroundColor = 'red';
    } else {body.style.backgroundColor = 'blue';}
    console.log('YES');
});
button3.addEventListener('click', () => {
    if (button1.style.backgroundColor === 'white') {
        body.style.backgroundColor = 'red';
    } else {body.style.backgroundColor = 'green';}
    console.log('YES');
});
button4.addEventListener('click', () => {
    if (button1.style.backgroundColor === 'white') {
        body.style.backgroundColor = 'red';
    } else {body.style.backgroundColor = 'yellow';}
    console.log('YES');
});
button5.addEventListener('click', () => {
    if (button1.style.backgroundColor === 'white') {
        body.style.backgroundColor = 'red';
    } else {body.style.backgroundColor = 'pink';}
    console.log('YES');
});
// body.addEventListener('click', () => {
//     body.style.backgroundColor = 'white';
//     console.log('Good');
// });

const x = document.getElementsByClassName("link")[1].id;
console.log(x);
const u = document.getElementsByClassName('link');
console.log(u);
