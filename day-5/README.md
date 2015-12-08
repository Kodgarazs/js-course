# Lesson 5 - Moving Ball

## Create a ball that moves
- Create the canvas boilerplate for the game (don't forget the sizes)
- Create a function that draws a ball
```js
function drawBall(x, y) {
  c.fillRect(x, y, 20, 20);
}
```
- Create a `draw` function that draws the ball based on two variables `x` and `y`
```js
var x = 50;
var y = 40;

function draw() {
  drawBall(x, y);
}

draw()
```
- Try to move the ball around by changing the variables in the `draw` function
- Explain how the movies are working what are the frames
- Ask: What would we need theoretically to move the Ball?
- Ask: How many times we would need to call the draw function in a second?
- Explain milliseconds
- Ask: How many milliseconds lasts between two draws?
- Show setInterval with a simple alert example in every 5 seconds
- Add a setInterval call for the draw for 30 frames per second
- Ask: What would make the ball move to different directions
- Explain how to move the ball in different angles and to negative directions
- Ask: How to make it not leave a trail after itself
Solution: (`clearRect` or `fillRect` with white)
```js
var x = 50;
var y = 40;

function draw() {
  c.clearRect(0, 0, 400, 300);
  drawBall(x, y);
  x = x + 5
  y = y + 2
}

draw()
```
- Move the velocities to variables

## Collision on wall
- Set the velocity to `vx = 4`, `vy = 0`
- Ask: On which value of the X would be collision with the right wall?
- Ask: How to "catch" this point in the code?
- Ask: How to "turn" with the ball
- Explain how to invert a variable sign
- Collision on right wall:
```js
var x = 50;
var y = 40;
var vx = 4;
var vy = 0;

function draw() {
  c.clearRect(0, 0, 400, 300);
  drawBall(x, y);

  if (x > 380) {
    vx = -vx
  } 

  x = x + vx;
  y = y + vy;
}
```
- Do the collision on the left wall in the same way
```js
var x = 50;
var y = 40;
var vx = 4;
var vy = 0;

function draw() {
  c.clearRect(0, 0, 400, 300);
  drawBall(x, y);

  if (x > 380) {
    vx = -vx;
  }
  if (x < 0) {
    vx = -vx;
  }

  x = x + vx;
  y = y + vy;
}
```
- If there is enough time explain the `||` operator and refactor the code
- Do the collision on the top and bottom wall as well
```js
var x = 50;
var y = 40;
var vx = 4;
var vy = 0;

function draw() {
  c.clearRect(0, 0, 400, 300);
  drawBall(x, y);

  if (x > 380 || x < 0) {
    vx = -vx;
  }
  if (y > 280 || y < 0) {
    vy = -vy;
  }

  x = x + vx;
  y = y + vy;
}
```

## Homework
Make the ball's color change on each collision


