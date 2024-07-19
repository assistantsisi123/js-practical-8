let inputBirthDate = prompt("Enter your birthdate (YYYY-MM-DD):");

let birthdate = new Date(inputBirthDate);

let currentDate = new Date();

let age = currentDate.getFullYear() - birthdate.getFullYear();

let monthDifference = currentDate.getMonth() - birthdate.getMonth();
let dayDifference = currentDate.getDate() - birthdate.getDate();

if (monthDifference < 0 || (monthDifference === 0 && dayDifference < 0)) {
    age--;
}
console.log("Your age is: " + age);