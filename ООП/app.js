const input = document.getElementById('input');
function Calculator(a, b) {
    this.a = a;
    this.b = b;

    this.read = function() {
        input.innerText = this.a;
        input.innerText = this.b;
    };
    
    this.sum = function() {
       return this.a + this.b;
    };

    this.mul = function() {
        return this.a * this.b;
    };
}
let calculator = new Calculator();
calculator.read();

// alert('Сумма: ' + calculator.sum() );

// alert('Умножение: ' + calculator.mul() );

const result = document.getElementById('result');

const button = document.getElementById('button');

button.addEventListener('click', () => {
    if (result.innerText === '____') {
        result.innerHTML = calculator.sum();
    } else {
        console.log(false);
    }
});
const input = document.getElementById('input');
