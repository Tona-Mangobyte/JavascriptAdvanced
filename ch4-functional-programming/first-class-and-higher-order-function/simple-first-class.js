// Assigning a function to a variable
const greet = function() {
    console.log("Hello, world!");
}

// Passing a function as an argument to another function
function callFunction(func) {
    func();
}

callFunction(greet); // Outputs: Hello, world!

// ==========

function add(a, b) {
    return a + b;
}
function subtract(a, b) {
    return a - b;
}

const a = 15;
const message = "The sum of 2 and 3 is: ";
const myFunc = a > 10 ? add : subtract;

console.log(message + myFunc(2, 3)); // Outputs: The sum of 2 and 3 is: 5
