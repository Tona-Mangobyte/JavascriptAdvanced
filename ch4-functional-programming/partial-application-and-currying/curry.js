function multiply(a, b) {
    return a * b;
}

function curry(fn) {
    return function(a) {
        return function(b) {
            return fn(a, b);
        }
    }
}

const curriedMultiply = curry(multiply);

console.log(curriedMultiply(2)(5)); // Outputs: 10
console.log(curriedMultiply(3)(5)); // Outputs: 15
