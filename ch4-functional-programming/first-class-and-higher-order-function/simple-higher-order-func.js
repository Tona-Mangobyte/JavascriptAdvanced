// A higher-order function that returns a function
function greaterThan(n) {
    return function(m) { return m > n; };
}

let greaterThan10 = greaterThan(10);
console.log(greaterThan10(11)); // Outputs: true


// # simple 2
sayHello()(); // Outputs: Hello!
function sayHello() {
    return function() {
        console.log("Hello!");
    }
}
