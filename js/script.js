//get element
// const body = document.querySelector("body");
// const button = document.querySelector("button");

//color array
const colors = ["red", "blue", "green", "yellow", "orange"];

body.style.backgroundColor = "red";

//event listener
// button.addEventListener("click", changeColors);

//change color with math.random
function changeColors() {
  const colorIndex = parseInt(Math.random() * colors.length);
  document.body.style.backgroundColor = colors[colorIndex];
}
