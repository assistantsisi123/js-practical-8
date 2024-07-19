let firstNum = parseInt(prompt("Enter first number"));
let secondNum = parseInt(prompt("Enter second number"));

if (firstNum >= secondNum) {
    console.log("The first number must be less than the second number");
} else {
    let randomNumber = Math.floor(Math.random() * (secondNum - firstNum + 1)) + firstNum;
    console.log("Random number: " + randomNumber);
}