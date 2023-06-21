var css = document.querySelector("h3");
var color1 = document.querySelector(".color-1");
var color2 = document.querySelector(".color-2");
var body = document.getElementById("gradient");

var gradientChange = function () {
  body.style.background =
    "linear-gradient(to right," + color1.value + "," + color2.value + ")";
  body.style.background =
    "-webkit-linear-gradient(to right," +
    color1.value +
    "," +
    color2.value +
    ")";
  body.style.background =
    "-moz-linear-gradient(to right," + color1.value + "," + color2.value + ")";
  body.style.background =
    "-o-linear-gradient(to right," + color1.value + "," + color2.value + ")";
  css.textContent = body.style.background + ";";
};

color1.addEventListener("input", gradientChange);
color2.addEventListener("input", gradientChange);
