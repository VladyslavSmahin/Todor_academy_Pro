function calculateArea(width, height) {
    return width * height
}

console.log(
    calculateArea(10, 2),
    calculateArea(1, 2),
    calculateArea(10, 20)
);

////

function printMessage(message) {
    console.log(message)
}

function sendMessage(message, callback) {
    callback(message)
}

sendMessage('Hi, guys', printMessage);
sendMessage('yo', printMessage);
sendMessage('dattebayo', printMessage);
sendMessage('    1', printMessage);
//////

const square = function (num) {
    return num*num;
}
console.log(
    square(1),
    square(3),
    square(6),
);
/////
