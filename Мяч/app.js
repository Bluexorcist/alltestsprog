


let keyNames = {
    32: 'stop',
    37: 'left',
    38: 'up',
    39: 'right',
    40: 'down',
    16: 'shift',
    18: 'alt',
    13: 'enter',
    49: '1',
    50: '2',
    51: '3',
    52: '4',
    53: '5',
    54: '6',
    55: '7',
    56: '8',
    57: '9'
};



let canvas = document.getElementById('canvas');
let ctx = canvas.getContext('2d');
let width = canvas.width;
let height = canvas.height;

let circle = function(x, y, radius, fillCircle) {
    ctx.beginPath();
    ctx.arc(x, y, radius, 0, Math.PI * 2, false);
    if (fillCircle) {
        ctx.fill();
    } else {
        ctx.stroke();
    }
};

let Ball = function () {
    this.x = width / 2;
    this.y = height / 2;
    this.xSpeed = 5;
    this.ySpeed = 0;
    this.speed = 5;
    this.radius = 10
};

Ball.prototype.move = function () {
    this.x += this.xSpeed;
    this.y += this.ySpeed;

    if (this.x < 0) {
        this.xSpeed = -this.xSpeed;
    } else if (this.x > width) {
        this.xSpeed = -this.xSpeed;
    }
    if (this.y < 0) {
        this.ySpeed = -this.ySpeed;
    } else if (this.y > height) {
        this.ySpeed = -this.ySpeed;
    }
};
Ball.prototype.draw = function () {
    circle(this.x, this.y, this.radius, true);
};
Ball.prototype.setDirection = function (direction) {
    if (direction === 'up') {
        this.xSpeed = 0;
        this.ySpeed = -this.speed;
    } else if (direction === 'down') {
        this.xSpeed = 0;
        this.ySpeed = this.speed;
    } else if (direction === 'left') {
        this.xSpeed = -this.speed;
        this.ySpeed = 0;
    } else if (direction === 'right') {
        this.xSpeed = this.speed;
        this.ySpeed = 0;
    } else if (direction === 'stop') {
        this.xSpeed = 0;
        this.ySpeed = 0;
    } else if (direction === '1') {
        this.speed = 1;
    } else if (direction === '2') {
        this.speed = 3;
    } else if (direction === '3') {
        this.speed = 5;
    } else if (direction === '4') {
        this.speed = 7;
    } else if (direction === '5') {
        this.speed = 9;
    } else if (direction === '6') {
        this.speed = 11;
    } else if (direction === '7') {
        this.speed = 13;
    } else if (direction === '8') {
        this.speed = 15;
    } else if (direction === '9') {
        this.speed = 17;
    } else if (direction === 'speedUp') {
        this.speed += 1;
    } else if (direction === 'speedDown') {
        this.speed -= 1;
    } else if (direction === 'sizeUp') {
        this.radius += 1;
    } else if (direction === 'sizeDown') {
        this.radius -= 1;
    }
    if (this.speed < 0) {
        this.speed = 0;
    } else if (this.radius < 1) {
        this.radius = 1;
    }
};
let ball = new Ball();

let keyActions = {
    32: 'stop',
    37: 'left',
    38: 'up',
    39: 'right',
    40: 'down',
    49: '1',
    50: '2',
    51: '3',
    52: '4',
    53: '5',
    54: '6',
    55: '7',
    56: '8',
    57: '9',
    90: 'speedUp',
    88: 'speedDown',
    67: 'sizeUp',
    86: 'sizeDown'
};

$('body').keydown(function (event) {
    let direction = keyActions[event.keyCode];
    ball.setDirection(direction);
});
setInterval(function() {
    ctx.clearRect(0, 0, width, height);
    ball.draw();
    ball.move();
    ctx.strokeRect(0, 0, width, height);
}, 10);
