let myArray = new Array();
let maxNumberOfValues = 20;
let message = "Please enter maxNumberOfValues values";
let input = prompt(message);
let inputCount = 0;


do {
    if (input === null || input.trim() === "" || isNaN(input)) {
        break;
    }
    let numInput = Number(input);
    if (numInput === 0) {
        break;
    }
    myArray.push(numInput);
    inputCount++;
    if (inputCount >= maxNumberOfValues) {
        break;
    }
    input = prompt(message);
} while (inputCount < maxNumberOfValues);
console.log(myArray.reverse());