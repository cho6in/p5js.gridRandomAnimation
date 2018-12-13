'use strict';

var tileCount = 4;
var radius = 20;

function setup() {
  createCanvas(windowWidth, windowHeight);
  // background(240, 30, 70, 50);
  frameRate(30);
  noStroke();
  colorMode(HSB, 360, 100, 100, 100);
}

function draw() {
  background(tremorX, tremorY / 2, tremorY, tremorX / 3);
  translate(width / tileCount / 2, height / tileCount / 2);

  for (var grX = 0; grX <= tileCount; grX++) {
    for (var grY = 0; grY <= tileCount; grY++) {
      var posX = width / tileCount * grX;
      var posY = height / tileCount * grY;

      var tremorX = random(-300, 300);
      var tremorY = random(-300, 300);

      fill(tremorX, tremorY, tremorX);

      rect(posX + tremorX, posY + tremorY,  radius, radius);
    }
  }
}
