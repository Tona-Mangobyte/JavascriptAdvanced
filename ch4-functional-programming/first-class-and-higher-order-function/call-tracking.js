function add(a, b) {
    return a + b;
}

function spy(fn) {
    return function(...args) {
        const argsString = `(${args.join(", ")})`;
        const returnValue = fn(...args);
        console.log(`Calling ${fn.name} with arguments ${argsString} and returned ${returnValue}`);
        return returnValue;
    };
}

function performanceSpy(func) {
    return function (...args) {
        console.time(func.name);
        const value = func(...args);
        console.timeEnd(func.name);
        return value;
    }
}

const addWithSpy = spy(performanceSpy(add));
console.log(addWithSpy(1, 2)); // 3
