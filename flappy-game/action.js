window.onload = function () {
  let canvas = document.getElementById("canvas");
  let context = canvas.getContext("2d");
  var count = 0;
  var x = 300;
  var y = 350;

  var t = Date.now(); // current time in millisecond
  var speed = 25; // move 25px per second

  document.onkeydown = function () {
    count += 1;
    y -= 25;
    speed = 25;
  };

  document.ontouchstart = function () {
    count += 1;
    y -= 25;
    speed = 25;
  };

  function draw() {
    // time interval between two frames
    let timePassed = (Date.now() - t) / 1000;
    t = Date.now();

    // clear the canvas
    context.clearRect(0, 0, 600, 400);
    // draw the circle
    context.beginPath();
    context.arc(x, y, 50, 0, 2 * Math.PI);
    context.fillStyle = "red";
    context.fill();

    // draw the text
    context.beginPath();
    context.font = "20px Arial";
    context.fillStyle = "white";
    context.fillText(`Count: ${count}`, 20, 30);

    // falling with gravity
    if (y <= 400 - 50) {
      speed += 50 * timePassed;
      y += speed * timePassed;
    }

    // on the ground
    if (y > 350) {
      y = 350;
      speed = 0;
      count = 0;
    }
    // make the animation
    window.requestAnimationFrame(draw);
  }
  draw();
};
