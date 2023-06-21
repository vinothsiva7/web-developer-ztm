const firstNumber = prompt(
  "Please enter the first number you want to calculate."
);
const secondNumber = prompt(
  "Please enter the second number you want to calculate first number with."
);
const sumNum = Number(firstNumber) + Number(secondNumber);
const subNum = Number(firstNumber) - Number(secondNumber);
const mulNum = Number(firstNumber) * Number(secondNumber);
const divNum = Number(firstNumber) / Number(secondNumber);

alert(
  "Your calculated answer is: " +
    "Add: " +
    sumNum +
    "; Subtract: " +
    subNum +
    "; Multiply: " +
    mulNum +
    "; Divide: " +
    divNum +
    "."
);
