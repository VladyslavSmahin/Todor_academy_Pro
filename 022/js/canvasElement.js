const canvas = document.getElementById('myCanvas');
const ctx = canvas.getContext('2d');
const container = document.querySelector('.canvasContainer');
canvas.width = container.clientWidth;
canvas.height = container.clientHeight;
const shape = {
    x: 0,
    y: 0,
    width: 100,
    height: 100,
    isDragging: false
};
function resizeCanvas() {
    canvas.width = container.clientWidth;
    canvas.height = container.clientHeight;
    drawShape();
}
window.addEventListener('resize', resizeCanvas);
function drawShape() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = 'brown';
    ctx.fillRect(shape.x, shape.y, shape.width, shape.height);
}

canvas.addEventListener('mousedown', function(event) {
    const rectBounds = canvas.getBoundingClientRect();
    const x = event.clientX - rectBounds.left;
    const y = event.clientY - rectBounds.top;


    if (x >= shape.x && x <= shape.x + shape.width && y >= shape.y && y <= shape.y + shape.height) {
        shape.isDragging = true;
    }
});

canvas.addEventListener('mousemove', function(event) {
    if (shape.isDragging) {
        const rectBounds = canvas.getBoundingClientRect();
        shape.x = event.clientX - rectBounds.left - shape.width / 2;
        shape.y = event.clientY - rectBounds.top - shape.height / 2;
        drawShape();
    }
});

canvas.addEventListener('mouseup', function() {
    if (shape.isDragging) {
        shape.isDragging = false;
    }
});

drawShape();
