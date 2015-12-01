var canvas = document.getElementById("my-canvas");
var c = canvas.getContext("2d");
 
var offset = 0;

for (var i = 0; i < 5; i = i + 1) {
  c.fillRect(offset, offset, 100, 100);
  offset = offset + 10;
}
