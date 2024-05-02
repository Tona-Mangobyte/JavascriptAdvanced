function autoPartial(fn) {
    return function(...args) {
        const argsNeeded = fn.length;
        if (args.length >= argsNeeded) {
            return fn(...args);
        }
        return autoPartial(fn.bind(null, ...args));
    };
}

function autoPartial2(fn) {
    return function() {
        const args = Array.prototype.slice.call(arguments);
        if (args.length >= fn.length) {
            return fn(...args);
        }
        return autoPartial2(fn.bind(null, ...args));
    };
}

function add(a, b, c) {
    return a + b + c;
}

// const add5 = autoPartial(add)(5);
const add5 = autoPartial2(add)(5);
console.log(add5(10, 15)); // Outputs: 30

// const result = autoPartial(add);
const result = autoPartial2(add);
console.log(result(10)(20)(30)); // Outputs: 60


