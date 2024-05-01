// Assigning a function to a variable
const greet = function() {
    console.log("Hello, world!");
}

// Passing a function as an argument to another function
function callFunction(func) {
    func();
}

callFunction(greet); // Outputs: Hello, world!
