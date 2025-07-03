var darkColorsArr = ["#2C3E50", "#34495E", "#2C2C2C", "#616A6B", "#4A235A", "#2F4F4F", "#0E4B5A", "#36454F", "#2C3E50", "#800020"];

function getRandomIndex() {
  var randomIndex = Math.floor(darkColorsArr.length * Math.random());
  return randomIndex;
}

const body = document.querySelector("body");
var bgHexCodeSpanElement = document.querySelector("#bg-hex-code");

function changeBackgroundColor() {
  var color = darkColorsArr[getRandomIndex()];
  bgHexCodeSpanElement.innerText = color;
  body.style.backgroundColor = color;
}

var btn = document.querySelector("#btn");
btn.addEventListener("click", changeBackgroundColor);
