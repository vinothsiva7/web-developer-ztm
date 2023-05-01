"use strict";

var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");

function inputLength() {
  return input.value.length;
}

function createListElement() {
  var li = document.createElement("li");
  li.appendChild(document.createTextNode(input.value));
  ul.appendChild(li);
  input.value = "";
}

function addListAfterClick() {
  if (inputLength() > 0) {
    createListElement();
  }
}

function addListAfterKeypress(event) {
  if (inputLength() > 0 && event.key === "Enter") {
    createListElement();
  }
}

button.addEventListener("click", addListAfterClick);

input.addEventListener("keypress", addListAfterKeypress);

// Adding More functionality done and delete button

// var liArray = document.querySelectorAll("li");
// console.log(liArray);
// var liDone = function listItemDone() {
//   liArray[i].classList.toggle("done");
// };
// var i;

// var addToggle = function addDoneToggle(event) {
//   for (let i = 0; i < liArray.length; i++) {
//     console.log(liArray[i]);
//     console.log(event);
//   }
// };

// console.log(addToggle);

// liArray[i].addEventListener("click", addToggle);

var liArray = document.getElementsByTagName("li");
console.log(liArray);
// var liItem;

// var listItemDone = function addDoneClass() {
//   liItem.classList.toggle("done");
// };

// function liItems(liItem) {
//   console.log(liItem);
//   liItem.classList.toggle("done");
// }

// liArray.map(liItems);

// console.log(liItems[i]);

// liArray[i].addEventListener("click", liItems);

var myFunction = function (mouseEvent) {
  if (mouseEvent.click === true) {
    this.classList.toggle("done");
    console.log(liArray[i]);
  }
  // for (var i = 0; i++; i < liArray.length) {
  // }
};

for (var i = 0; i++; i < liArray.length) {
  liArray[i].addEventListener("click", myFunction(onclick));
  console.log(liArray[i]);
}
