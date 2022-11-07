//VARIABLES
let arrayColor = ["yellow", "blue", "green", "violet"];
let theClick = document.querySelector(".btn");
let getColor = document.querySelector("main");

//LISTEN FOR CLICKS
theClick.addEventListener("click", changeColor);

//PERFORM CHANGE COLOR OPERATION
function changeColor() {
  let rand = Math.floor(Math.random() * arrayColor.length);
  getColor.style.backgroundColor = arrayColor[rand];
}
