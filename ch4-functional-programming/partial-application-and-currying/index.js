function add(a, b, c) {
    return a + b + c;
}

function partial(func, ...args) {
    return function(...newArgs) {
        // return func.apply(null, [...args, ...newArgs]);
        // return func.bind(null, ...args, ...newArgs)();
        // return func.call(null, ...args, ...newArgs);
        return func(...args, ...newArgs);
    }
}

const add5 = partial(add, 2, 3);
console.log(add5(4)); // Outputs: 9

const add10 = partial(add, 2);
console.log(add10(3, 5)); // Outputs: 10
