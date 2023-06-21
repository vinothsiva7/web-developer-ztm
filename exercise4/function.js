var driverAge = Number(
  prompt("Hi, how are you today? Please enter your age to proceed.")
);

if (driverAge > 2 && driverAge < 18) {
  alert("Sorry, you are too young to drive this car. Powering off");
} else if (driverAge > 18) {
  alert("Powering on. Enjoy the ride!");
} else if (driverAge === 18) {
  alert("Congratulations on your first year of driving. Enjoy the ride!");
} else {
  alert("Stop messing with me. I'm a sensitive & a delicate car");
}
