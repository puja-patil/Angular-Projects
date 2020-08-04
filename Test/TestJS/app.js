// document.getElementById("msg").innerText = "Hey! Pooja..";
var ol = 0;
// var circleInterval = setInterval(circleAnimation, 50);
// function circleAnimation() {
//   if (ol > 4000 / 50) {
//     document.getElementById("circle").style.backgroundColor = "dimgrey";
//     clearInterval(circleInterval);
//   } else {
//     ol++;
//     document.getElementById("circle").style.left = ol + "px";
//   }
// }

var circleInterval;
// function circleAnimation(time) {
//   ol++;
//   document.getElementById("circle").style.left = ol + "px";
//   if (time < 4000) {
//     circleInterval = requestAnimationFrame(circleAnimation);
//   } else {
//     document.getElementById("circle").style.backgroundColor = "dimgrey";
//     cancelAnimationFrame(circleInterval);
//   }
// }
// circleInterval = requestAnimationFrame(circleAnimation);

var isPlaying = false;
var size = 50;
function circleAnimation(time) {
  ol++;
  size++;
  document.getElementById("circle").style.left = ol + "px";
  document.getElementById("circle").style.height = size + "px";
  document.getElementById("circle").style.width = size + "px";
  document.getElementById("circle").style.borderRadius = size + "px";
  circleInterval = requestAnimationFrame(circleAnimation);
  // document.getElementById("circle").style.backgroundColor = "dimgrey";
  // cancelAnimationFrame(circleInterval);
}
//circleInterval = requestAnimationFrame(circleAnimation);

function mouseClicked() {
  if (isPlaying) {
    isPlaying = false;
    document.getElementById("circle").style.backgroundColor = "dimgrey";
    cancelAnimationFrame(circleInterval);
  } else {
    isPlaying = true;
    document.getElementById("circle").style.backgroundColor = "crimson";
    circleInterval = requestAnimationFrame(circleAnimation);
  }
}
document.getElementById("circle").addEventListener("click", mouseClicked);
document.getElementById("circle").style.backgroundColor = "dimgrey";
