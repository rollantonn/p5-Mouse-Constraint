let nextActionTime = 0;
let isBlocked = false;
let fakeMouseX;
let fakeMouseY;

function setup() {
  createCanvas(1000, 800);
  background(255, 0, 0);

  fakeMouseX = mouseX;
  fakeMouseY = mouseY;
}

function draw() {
  noStroke();
  fill(255, 190, 100);

  circle(fakeMouseX, fakeMouseY, 50);

  if (millis() > nextActionTime) {
    isBlocked = !isBlocked;

    nextActionTime = millis() + random(0, 4000);
  }

  if (!isBlocked) {
    fakeMouseX = lerp(fakeMouseX, mouseX, 0.1);
    fakeMouseY = lerp(fakeMouseY, mouseY, 0.1);
  }
}
