function multiply(a, b) {
    return a * b;
}

const double = multiply.bind(null, 2);

console.log(double(5)); // Outputs: 10
console.log(double(10)); // Outputs: 20

// const triple = multiply.call(null, 3, 5);
// const triple = multiply.apply(null, [3, 5]);
// console.log(triple); // Outputs: 15
