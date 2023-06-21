alert("Hi, Nice to meet you. Please verify your age to proceed.");
var age = prompt("Hi, how are you today? Please enter your age to proceed.");

var driverAge = function checkDriverAge() {
  age = Number(age);

  if (age > 2 && age < 18) {
    alert("Sorry, you are too young to drive this car. Powering off");
  } else if (age > 18) {
    alert("Powering on. Enjoy the ride!");
  } else if (age === 18) {
    alert("Congratulations on your first year of driving. Enjoy the ride!");
  } else {
    alert("Stop messing with me. I'm a sensitive & a delicate car");
  }
};
console.log(age);

driverAge(age);

function checkDriverAge2() {
  if (age > 2 && age < 18) {
    alert("Sorry, you are too young to drive this car. Powering off");
  } else if (age > 18) {
    alert("Powering on. Enjoy the ride!");
  } else if (age === 18) {
    alert("Congratulations on your first year of driving. Enjoy the ride!");
  } else {
    alert("Stop messing with me. I'm a sensitive & a delicate car");
  }
}

checkDriverAge2(age);
