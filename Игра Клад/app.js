
// get random number
let getRandomNumber = function(size) {
    return Math.floor(Math.random() * size);
};
// get distance from click to target
let getDistance = function(event, target) {
    let diffX = event.offsetX - target.x;
    let diffY = event.offsetY - target.y;
    return Math.sqrt((diffX * diffX) + (diffY * diffY));
};

// get for the help <p>

let getDistanceHint = function(distance) {
    if(distance < 10) {
        return 'Обожжешся!!';
    } else if(distance < 20) {
        return 'Очень горячо!!';
    } else if(distance < 40) {
        return 'Горячо!';
    } else if(distance < 80) {
        return 'Тепло';
    } else if(distance < 160) {
        return 'Холодно';
    } else if(distance < 320) {
        return 'Очень холодно';
    } else if(distance < 460) {
        return 'Очень очень холодно';
    } else {
        return 'Замерзнешь';
    }
};

// create var

let width = 450;
let height = 450;
let clicks = 0;

// random cordinate of target

let target = {
    x: getRandomNumber(width),
    y: getRandomNumber(height)
};

// add to img eventLoop

$('#map').click(function (event) {
    clicks++;

    let distance = getDistance(event, target);
    let distanceHint = getDistanceHint(distance);
    $('#distance').text(distanceHint);
    if(distance < 8) {
        alert('Клад найден!! Сделано кликов: ' + clicks);
    } else if(clicks === 100) {
        alert('КОНЕЦ ИГРЫ')
    }

    let actualCliks = (100 - clicks);
    if(distance < 40) {
        $('#clicks').text('Осталось ' + actualCliks + ' кликов!!!')
    }
});

