// var xoff1 = 0;
// var xoff2 = 1000;

var inc = 0.01;
var start = 0;

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(51);

  stroke(255);
  noFill();
  beginShape();
  var xoff = start;
  for (var x = 0; x < width; x++) {
    stroke(255);
    // var y = random(height);
    var y = noise(xoff) * height;
    vertex(x, y);

    xoff += inc;
  }

  endShape();
  start += inc;
  // noLoop();

  // var x = random(width);

  // var x = map(noise(xoff1), 0, 1, 0, width);
  // var y = map(noise(xoff2), 0, 1, 0, height);

  // xoff1 += 0.02;
  // xoff2 += 0.02;

  // ellipse(x, y, 20, 20);
}
