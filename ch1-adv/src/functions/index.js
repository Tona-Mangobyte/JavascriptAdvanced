// 1.) Regular Functions: The most common type of function. They are defined using the function keyword.
function greet() {
    console.log('Hello');
}

// 2.) Anonymous Functions: Functions that are not bound to an identifier (or name). They are often used as arguments passed to higher-order functions.
setTimeout(function() {
    console.log('This is an anonymous function');
}, 1000);

// 3.) IIFE (Immediately Invoked Function Expression): A function runs as soon as it is defined.
(function() {
    console.log('This is an IIFE');
})();

// 4.) Arrow Functions: Introduced in ES6, these are a more concise syntax for writing function expressions.
const greet2 = () => console.log('Hello');

// 5.) Generator Functions: Special kind of function that works as a factory for iterators.
function* generator() {
    yield 1;
    yield 2;
    yield 3;
}

// 6.) Async Functions: These functions return a Promise. If the function throws an error, the Promise will be rejected. If the function returns a value, the Promise will be resolved.
async function asyncFunc() {
    return "Hello";
}

// 7.) Method or Constructor Functions: These are functions that are methods of an object or a class constructor.
class MyClass {
    constructor() {} // constructor function
    method() {} // method function
}
