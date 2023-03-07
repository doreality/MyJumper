window.onload = function() {
    let canvas = document.getElementById('canvas');
    let context = canvas.getContext('2d');

    let up = document.getElementById('up');
    let down = document.getElementById('down');
    let left = document.getElementById('left');
    let right = document.getElementById('right');

    // red rect
    var x = 250;
    var y = 150;
    // coin
    var coinx = Math.random() * (600 - 50);
    var coiny = Math.random() * (400 - 50);

    var score = 0;

    var t = Date.now(); // 当前时间
    var speed = 300; 
    var dir = 0;

    const stop = () => dir = 0;
    const moveDown = () => dir = 4;
    const moveUp = () => dir = 3;
    const moveLeft = () => dir = 2;
    const moveRight = () => dir = 1;
    
    down.addEventListener('mousedown', moveDown);
    down.addEventListener('mouseup', stop);
    down.addEventListener('touchstart', moveDown);
    down.addEventListener('touchend', stop);
    
    up.addEventListener('mousedown', moveUp);
    up.addEventListener('mouseup', stop);
    up.addEventListener('touchstart', moveUp);
    up.addEventListener('touchend', stop);
    
    left.addEventListener('mousedown', moveLeft);
    left.addEventListener('mouseup', stop);
    left.addEventListener('touchstart', moveLeft);
    left.addEventListener('touchend', stop);
        
    right.addEventListener('mousedown', moveRight);
    right.addEventListener('mouseup', stop);
    right.addEventListener('touchstart', moveRight);
    right.addEventListener('touchend', stop);
    
    
    function draw() {
        timePassed = (Date.now() - t) / 1000; // 一帧经历的时间
        t = Date.now(); // 更新当前时间
        let fps = Math.round(1 / timePassed); // 帧率

        context.clearRect(0, 0, 600, 400);

        // red rect
        context.beginPath();
        context.rect(x, y, 100, 100);
        context.fillStyle = 'red';
        context.fill();

        // yellow coin
        context.beginPath();
        context.rect(coinx, coiny, 50, 50);
        context.fillStyle = '#e3c228';
        context.fill();

        // fps
        context.beginPath();
        context.font = '18px Arial';
        context.fillStyle = 'black';
        context.fillText(`FPS: ${fps}`, 20, 30);
        
        // score
        context.beginPath();
        context.font = '18px Arial';
        context.fillStyle = 'green';
        context.fillText(`Scores: ${score}`, 20, 370);

        if (dir == 4) { // down
            y += (timePassed * speed);
            if (y > 300) y = 300;
        } else if (dir == 3) { // up
            y -= (timePassed * speed);
            if (y < 0) y = 0;
        } else if (dir == 2) { // left
            x -= (timePassed * speed);
            if (x < 0) x = 0;
        } else if (dir == 1) { // right
            x += (timePassed * speed);
            if (x > 500) x = 500;
        }

        // collision detection, if collision happens:
        if (coinx <= x + 100 && x <= coinx + 50 &&
            coiny <= y + 100 && y <= coiny + 50) {
            score++;
            // make a new coin
            coinx = Math.random() * (600 - 50);
            coiny = Math.random() * (400 - 50);
        }
        window.requestAnimationFrame(draw);
    }
    draw();

}
